import os
from pocketsphinx import LiveSpeech

# Set the path to the language and acoustic models
MODELDIR = "models"  # Change this to the directory where you placed your models
LANGUAGE_MODEL = os.path.join(MODELDIR, "en-us.lm.bin")
ACOUSTIC_MODEL = os.path.join(MODELDIR, "en-us")

# Initialize the speech recognizer
speech = LiveSpeech(
    lm=LANGUAGE_MODEL,
    hmm=ACOUSTIC_MODEL,
    jsgf=None
)