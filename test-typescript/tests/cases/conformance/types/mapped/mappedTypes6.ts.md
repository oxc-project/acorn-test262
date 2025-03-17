__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2524,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "T00",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 14,
        "end": 38,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 17,
          "end": 29,
          "name": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 22,
            "end": 29,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 28,
              "end": 29,
              "typeName": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 32,
          "end": 36,
          "objectType": {
            "type": "TSTypeReference",
            "start": 32,
            "end": 33,
            "typeName": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 34,
            "end": 35,
            "typeName": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 22,
          "end": 29,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 28,
            "end": 29,
            "typeName": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 40,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 48,
        "end": 51,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 49,
            "end": 50,
            "name": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 54,
        "end": 79,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 57,
          "end": 69,
          "name": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 62,
            "end": 69,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 68,
              "end": 69,
              "typeName": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 73,
          "end": 77,
          "objectType": {
            "type": "TSTypeReference",
            "start": 73,
            "end": 74,
            "typeName": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 75,
            "end": 76,
            "typeName": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 62,
          "end": 69,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 68,
            "end": 69,
            "typeName": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 57,
          "end": 58,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 95,
        "end": 121,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 98,
          "end": 110,
          "name": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 103,
            "end": 110,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 110,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 115,
          "end": 119,
          "objectType": {
            "type": "TSTypeReference",
            "start": 115,
            "end": 116,
            "typeName": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 117,
            "end": 118,
            "typeName": {
              "type": "Identifier",
              "start": 117,
              "end": 118,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 103,
          "end": 110,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 109,
            "end": 110,
            "typeName": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 123,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 131,
        "name": "T03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 131,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 132,
            "end": 133,
            "name": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 137,
        "end": 163,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 140,
          "end": 152,
          "name": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 145,
            "end": 152,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 151,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 157,
          "end": 161,
          "objectType": {
            "type": "TSTypeReference",
            "start": 157,
            "end": 158,
            "typeName": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 159,
            "end": 160,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 145,
          "end": 152,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 151,
            "end": 152,
            "typeName": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 166,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 171,
        "end": 174,
        "name": "T04",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 177,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 176,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 180,
        "end": 213,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 192,
          "end": 204,
          "name": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 197,
            "end": 204,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 204,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 207,
          "end": 211,
          "objectType": {
            "type": "TSTypeReference",
            "start": 207,
            "end": 208,
            "typeName": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 209,
            "end": 210,
            "typeName": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 197,
          "end": 204,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 203,
            "end": 204,
            "typeName": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 192,
          "end": 193,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 215,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 223,
        "name": "T05",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 223,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 229,
        "end": 263,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 241,
          "end": 253,
          "name": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 246,
            "end": 253,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 252,
              "end": 253,
              "typeName": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 257,
          "end": 261,
          "objectType": {
            "type": "TSTypeReference",
            "start": 257,
            "end": 258,
            "typeName": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 259,
            "end": 260,
            "typeName": {
              "type": "Identifier",
              "start": 259,
              "end": 260,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 246,
          "end": 253,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 252,
            "end": 253,
            "typeName": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 241,
          "end": 242,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 265,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 273,
        "name": "T06",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 273,
        "end": 276,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 274,
            "end": 275,
            "name": {
              "type": "Identifier",
              "start": 274,
              "end": 275,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 279,
        "end": 314,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 291,
          "end": 303,
          "name": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 296,
            "end": 303,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 302,
              "end": 303,
              "typeName": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 308,
          "end": 312,
          "objectType": {
            "type": "TSTypeReference",
            "start": 308,
            "end": 309,
            "typeName": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 310,
            "end": 311,
            "typeName": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 296,
          "end": 303,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 302,
            "end": 303,
            "typeName": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 291,
          "end": 292,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 316,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 324,
        "name": "T07",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 324,
        "end": 327,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 325,
            "end": 326,
            "name": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 330,
        "end": 365,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 342,
          "end": 354,
          "name": {
            "type": "Identifier",
            "start": 342,
            "end": 343,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 347,
            "end": 354,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 359,
          "end": 363,
          "objectType": {
            "type": "TSTypeReference",
            "start": 359,
            "end": 360,
            "typeName": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 361,
            "end": 362,
            "typeName": {
              "type": "Identifier",
              "start": 361,
              "end": 362,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": true,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 347,
          "end": 354,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 353,
            "end": 354,
            "typeName": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 342,
          "end": 343,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 368,
      "end": 417,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 376,
        "name": "T08",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 376,
        "end": 379,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 377,
            "end": 378,
            "name": {
              "type": "Identifier",
              "start": 377,
              "end": 378,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 382,
        "end": 416,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 395,
          "end": 407,
          "name": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 400,
            "end": 407,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 406,
              "end": 407,
              "typeName": {
                "type": "Identifier",
                "start": 406,
                "end": 407,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 410,
          "end": 414,
          "objectType": {
            "type": "TSTypeReference",
            "start": 410,
            "end": 411,
            "typeName": {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 412,
            "end": 413,
            "typeName": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": "+",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 400,
          "end": 407,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 406,
            "end": 407,
            "typeName": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 395,
          "end": 396,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 418,
      "end": 468,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 426,
        "name": "T09",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 426,
        "end": 429,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 427,
            "end": 428,
            "name": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 432,
        "end": 467,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 445,
          "end": 457,
          "name": {
            "type": "Identifier",
            "start": 445,
            "end": 446,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 450,
            "end": 457,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 456,
              "end": 457,
              "typeName": {
                "type": "Identifier",
                "start": 456,
                "end": 457,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 461,
          "end": 465,
          "objectType": {
            "type": "TSTypeReference",
            "start": 461,
            "end": 462,
            "typeName": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 463,
            "end": 464,
            "typeName": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": "+",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 450,
          "end": 457,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 456,
            "end": 457,
            "typeName": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 469,
      "end": 520,
      "id": {
        "type": "Identifier",
        "start": 474,
        "end": 477,
        "name": "T10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 477,
        "end": 480,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 478,
            "end": 479,
            "name": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 483,
        "end": 519,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 496,
          "end": 508,
          "name": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 501,
            "end": 508,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 507,
              "end": 508,
              "typeName": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 513,
          "end": 517,
          "objectType": {
            "type": "TSTypeReference",
            "start": 513,
            "end": 514,
            "typeName": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 515,
            "end": 516,
            "typeName": {
              "type": "Identifier",
              "start": 515,
              "end": 516,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": "+",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 501,
          "end": 508,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 507,
            "end": 508,
            "typeName": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 496,
          "end": 497,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 521,
      "end": 572,
      "id": {
        "type": "Identifier",
        "start": 526,
        "end": 529,
        "name": "T11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 529,
        "end": 532,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 530,
            "end": 531,
            "name": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 535,
        "end": 571,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 548,
          "end": 560,
          "name": {
            "type": "Identifier",
            "start": 548,
            "end": 549,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 553,
            "end": 560,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 559,
              "end": 560,
              "typeName": {
                "type": "Identifier",
                "start": 559,
                "end": 560,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 565,
          "end": 569,
          "objectType": {
            "type": "TSTypeReference",
            "start": 565,
            "end": 566,
            "typeName": {
              "type": "Identifier",
              "start": 565,
              "end": 566,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 567,
            "end": 568,
            "typeName": {
              "type": "Identifier",
              "start": 567,
              "end": 568,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": "+",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 553,
          "end": 560,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 559,
            "end": 560,
            "typeName": {
              "type": "Identifier",
              "start": 559,
              "end": 560,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 548,
          "end": 549,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 574,
      "end": 623,
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 582,
        "name": "T12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 582,
        "end": 585,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 583,
            "end": 584,
            "name": {
              "type": "Identifier",
              "start": 583,
              "end": 584,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 588,
        "end": 622,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 601,
          "end": 613,
          "name": {
            "type": "Identifier",
            "start": 601,
            "end": 602,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 606,
            "end": 613,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 612,
              "end": 613,
              "typeName": {
                "type": "Identifier",
                "start": 612,
                "end": 613,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 616,
          "end": 620,
          "objectType": {
            "type": "TSTypeReference",
            "start": 616,
            "end": 617,
            "typeName": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 618,
            "end": 619,
            "typeName": {
              "type": "Identifier",
              "start": 618,
              "end": 619,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": "-",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 606,
          "end": 613,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 612,
            "end": 613,
            "typeName": {
              "type": "Identifier",
              "start": 612,
              "end": 613,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 601,
          "end": 602,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 624,
      "end": 674,
      "id": {
        "type": "Identifier",
        "start": 629,
        "end": 632,
        "name": "T13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 632,
        "end": 635,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 633,
            "end": 634,
            "name": {
              "type": "Identifier",
              "start": 633,
              "end": 634,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 638,
        "end": 673,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 651,
          "end": 663,
          "name": {
            "type": "Identifier",
            "start": 651,
            "end": 652,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 656,
            "end": 663,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 662,
              "end": 663,
              "typeName": {
                "type": "Identifier",
                "start": 662,
                "end": 663,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 667,
          "end": 671,
          "objectType": {
            "type": "TSTypeReference",
            "start": 667,
            "end": 668,
            "typeName": {
              "type": "Identifier",
              "start": 667,
              "end": 668,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 669,
            "end": 670,
            "typeName": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": true,
        "readonly": "-",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 656,
          "end": 663,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 662,
            "end": 663,
            "typeName": {
              "type": "Identifier",
              "start": 662,
              "end": 663,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 651,
          "end": 652,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 675,
      "end": 726,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 683,
        "name": "T14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 683,
        "end": 686,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 684,
            "end": 685,
            "name": {
              "type": "Identifier",
              "start": 684,
              "end": 685,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 689,
        "end": 725,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 702,
          "end": 714,
          "name": {
            "type": "Identifier",
            "start": 702,
            "end": 703,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 707,
            "end": 714,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 713,
              "end": 714,
              "typeName": {
                "type": "Identifier",
                "start": 713,
                "end": 714,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 719,
          "end": 723,
          "objectType": {
            "type": "TSTypeReference",
            "start": 719,
            "end": 720,
            "typeName": {
              "type": "Identifier",
              "start": 719,
              "end": 720,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 721,
            "end": 722,
            "typeName": {
              "type": "Identifier",
              "start": 721,
              "end": 722,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "+",
        "readonly": "-",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 707,
          "end": 714,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 713,
            "end": 714,
            "typeName": {
              "type": "Identifier",
              "start": 713,
              "end": 714,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 702,
          "end": 703,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 727,
      "end": 778,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 735,
        "name": "T15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 735,
        "end": 738,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 736,
            "end": 737,
            "name": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 741,
        "end": 777,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 754,
          "end": 766,
          "name": {
            "type": "Identifier",
            "start": 754,
            "end": 755,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 759,
            "end": 766,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 765,
              "end": 766,
              "typeName": {
                "type": "Identifier",
                "start": 765,
                "end": 766,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 771,
          "end": 775,
          "objectType": {
            "type": "TSTypeReference",
            "start": 771,
            "end": 772,
            "typeName": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 773,
            "end": 774,
            "typeName": {
              "type": "Identifier",
              "start": 773,
              "end": 774,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": "-",
        "readonly": "-",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 759,
          "end": 766,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 765,
            "end": 766,
            "typeName": {
              "type": "Identifier",
              "start": 765,
              "end": 766,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 754,
          "end": 755,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 780,
      "end": 964,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 791,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 795,
          "end": 809,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 796,
            "end": 809,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 798,
              "end": 809,
              "typeName": {
                "type": "Identifier",
                "start": 798,
                "end": 806,
                "name": "Required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 806,
                "end": 809,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 807,
                    "end": 808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 807,
                      "end": 808,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 811,
          "end": 815,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 815,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 814,
              "end": 815,
              "typeName": {
                "type": "Identifier",
                "start": 814,
                "end": 815,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 817,
          "end": 830,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 818,
            "end": 830,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 820,
              "end": 830,
              "typeName": {
                "type": "Identifier",
                "start": 820,
                "end": 827,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 827,
                "end": 830,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 828,
                    "end": 829,
                    "typeName": {
                      "type": "Identifier",
                      "start": 828,
                      "end": 829,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 832,
        "end": 964,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 838,
            "end": 844,
            "expression": {
              "type": "AssignmentExpression",
              "start": 838,
              "end": 843,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 838,
                "end": 839,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 849,
            "end": 855,
            "expression": {
              "type": "AssignmentExpression",
              "start": 849,
              "end": 854,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 849,
                "end": 850,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 853,
                "end": 854,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 870,
            "end": 876,
            "expression": {
              "type": "AssignmentExpression",
              "start": 870,
              "end": 875,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 870,
                "end": 871,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 874,
                "end": 875,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 891,
            "end": 897,
            "expression": {
              "type": "AssignmentExpression",
              "start": 891,
              "end": 896,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 891,
                "end": 892,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 895,
                "end": 896,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 902,
            "end": 908,
            "expression": {
              "type": "AssignmentExpression",
              "start": 902,
              "end": 907,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 906,
                "end": 907,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 913,
            "end": 919,
            "expression": {
              "type": "AssignmentExpression",
              "start": 913,
              "end": 918,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 913,
                "end": 914,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 917,
                "end": 918,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 934,
            "end": 940,
            "expression": {
              "type": "AssignmentExpression",
              "start": 934,
              "end": 939,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 934,
                "end": 935,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 938,
                "end": 939,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 945,
            "end": 951,
            "expression": {
              "type": "AssignmentExpression",
              "start": 945,
              "end": 950,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 945,
                "end": 946,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 956,
            "end": 962,
            "expression": {
              "type": "AssignmentExpression",
              "start": 956,
              "end": 961,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 956,
                "end": 957,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 960,
                "end": 961,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 791,
        "end": 794,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 792,
            "end": 793,
            "name": {
              "type": "Identifier",
              "start": 792,
              "end": 793,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 966,
      "end": 1028,
      "id": {
        "type": "Identifier",
        "start": 971,
        "end": 982,
        "name": "Denullified",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 982,
        "end": 985,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 983,
            "end": 984,
            "name": {
              "type": "Identifier",
              "start": 983,
              "end": 984,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 988,
        "end": 1027,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 991,
          "end": 1003,
          "name": {
            "type": "Identifier",
            "start": 991,
            "end": 992,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 996,
            "end": 1003,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1002,
              "end": 1003,
              "typeName": {
                "type": "Identifier",
                "start": 1002,
                "end": 1003,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1008,
          "end": 1025,
          "typeName": {
            "type": "Identifier",
            "start": 1008,
            "end": 1019,
            "name": "NonNullable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1019,
            "end": 1025,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1020,
                "end": 1024,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1020,
                  "end": 1021,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1020,
                    "end": 1021,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1022,
                  "end": 1023,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1022,
                    "end": 1023,
                    "name": "P",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": "-",
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 996,
          "end": 1003,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1002,
            "end": 1003,
            "typeName": {
              "type": "Identifier",
              "start": 1002,
              "end": 1003,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 991,
          "end": 992,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1030,
      "end": 1340,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1041,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1045,
          "end": 1062,
          "name": "w",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1046,
            "end": 1062,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1048,
              "end": 1062,
              "typeName": {
                "type": "Identifier",
                "start": 1048,
                "end": 1059,
                "name": "Denullified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1059,
                "end": 1062,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1060,
                    "end": 1061,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1060,
                      "end": 1061,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1064,
          "end": 1078,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1065,
            "end": 1078,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1067,
              "end": 1078,
              "typeName": {
                "type": "Identifier",
                "start": 1067,
                "end": 1075,
                "name": "Required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1075,
                "end": 1078,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1076,
                    "end": 1077,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1076,
                      "end": 1077,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1080,
          "end": 1084,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1081,
            "end": 1084,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1083,
              "end": 1084,
              "typeName": {
                "type": "Identifier",
                "start": 1083,
                "end": 1084,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1086,
          "end": 1099,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1087,
            "end": 1099,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1089,
              "end": 1099,
              "typeName": {
                "type": "Identifier",
                "start": 1089,
                "end": 1096,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1096,
                "end": 1099,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1097,
                    "end": 1098,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1097,
                      "end": 1098,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1101,
        "end": 1340,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1107,
            "end": 1113,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1107,
              "end": 1112,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1107,
                "end": 1108,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1111,
                "end": 1112,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1118,
            "end": 1124,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1118,
              "end": 1123,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1118,
                "end": 1119,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1122,
                "end": 1123,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1139,
            "end": 1145,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1139,
              "end": 1144,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1139,
                "end": 1140,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1143,
                "end": 1144,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1160,
            "end": 1166,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1160,
              "end": 1165,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1160,
                "end": 1161,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1164,
                "end": 1165,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1181,
            "end": 1187,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1181,
              "end": 1186,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1181,
                "end": 1182,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1185,
                "end": 1186,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1192,
            "end": 1198,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1192,
              "end": 1197,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1192,
                "end": 1193,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1196,
                "end": 1197,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1203,
            "end": 1209,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1203,
              "end": 1208,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1203,
                "end": 1204,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1207,
                "end": 1208,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1224,
            "end": 1230,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1224,
              "end": 1229,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1224,
                "end": 1225,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1228,
                "end": 1229,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1245,
            "end": 1251,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1245,
              "end": 1250,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1245,
                "end": 1246,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1249,
                "end": 1250,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1256,
            "end": 1262,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1256,
              "end": 1261,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1256,
                "end": 1257,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1260,
                "end": 1261,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1267,
            "end": 1273,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1267,
              "end": 1272,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1267,
                "end": 1268,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1278,
            "end": 1284,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1278,
              "end": 1283,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1278,
                "end": 1279,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1282,
                "end": 1283,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1299,
            "end": 1305,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1299,
              "end": 1304,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1299,
                "end": 1300,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1303,
                "end": 1304,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1310,
            "end": 1316,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1310,
              "end": 1315,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1310,
                "end": 1311,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1314,
                "end": 1315,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1321,
            "end": 1327,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1321,
              "end": 1326,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1321,
                "end": 1322,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1325,
                "end": 1326,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1332,
            "end": 1338,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1332,
              "end": 1337,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1332,
                "end": 1333,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1336,
                "end": 1337,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1041,
        "end": 1044,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1042,
            "end": 1043,
            "name": {
              "type": "Identifier",
              "start": 1042,
              "end": 1043,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1343,
      "end": 1495,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1354,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1358,
          "end": 1375,
          "name": "w",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1359,
            "end": 1375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1361,
              "end": 1375,
              "typeName": {
                "type": "Identifier",
                "start": 1361,
                "end": 1372,
                "name": "Denullified",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1372,
                "end": 1375,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1373,
                    "end": 1374,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1374,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1377,
          "end": 1391,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1378,
            "end": 1391,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1380,
              "end": 1391,
              "typeName": {
                "type": "Identifier",
                "start": 1380,
                "end": 1388,
                "name": "Required",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1388,
                "end": 1391,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1389,
                    "end": 1390,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1389,
                      "end": 1390,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1393,
          "end": 1397,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1394,
            "end": 1397,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1396,
              "end": 1397,
              "typeName": {
                "type": "Identifier",
                "start": 1396,
                "end": 1397,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1399,
          "end": 1412,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1400,
            "end": 1412,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1402,
              "end": 1412,
              "typeName": {
                "type": "Identifier",
                "start": 1402,
                "end": 1409,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1409,
                "end": 1412,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1410,
                    "end": 1411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1410,
                      "end": 1411,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1414,
        "end": 1495,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1420,
            "end": 1427,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1420,
              "end": 1426,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1420,
                "end": 1421,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1424,
                "end": 1426,
                "properties": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1442,
            "end": 1449,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1442,
              "end": 1448,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1442,
                "end": 1443,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1446,
                "end": 1448,
                "properties": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1464,
            "end": 1471,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1464,
              "end": 1470,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1464,
                "end": 1465,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1468,
                "end": 1470,
                "properties": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1486,
            "end": 1493,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1486,
              "end": 1492,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1486,
                "end": 1487,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1490,
                "end": 1492,
                "properties": []
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1354,
        "end": 1357,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1355,
            "end": 1356,
            "name": {
              "type": "Identifier",
              "start": 1355,
              "end": 1356,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1497,
      "end": 1556,
      "id": {
        "type": "Identifier",
        "start": 1502,
        "end": 1511,
        "name": "Readwrite",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1511,
        "end": 1514,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1512,
            "end": 1513,
            "name": {
              "type": "Identifier",
              "start": 1512,
              "end": 1513,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1517,
        "end": 1556,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1534,
          "end": 1546,
          "name": {
            "type": "Identifier",
            "start": 1534,
            "end": 1535,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1539,
            "end": 1546,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1545,
              "end": 1546,
              "typeName": {
                "type": "Identifier",
                "start": 1545,
                "end": 1546,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1549,
          "end": 1553,
          "objectType": {
            "type": "TSTypeReference",
            "start": 1549,
            "end": 1550,
            "typeName": {
              "type": "Identifier",
              "start": 1549,
              "end": 1550,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 1551,
            "end": 1552,
            "typeName": {
              "type": "Identifier",
              "start": 1551,
              "end": 1552,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": "-",
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1539,
          "end": 1546,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1545,
            "end": 1546,
            "typeName": {
              "type": "Identifier",
              "start": 1545,
              "end": 1546,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1534,
          "end": 1535,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1558,
      "end": 1715,
      "id": {
        "type": "Identifier",
        "start": 1567,
        "end": 1570,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1574,
          "end": 1588,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1575,
            "end": 1588,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1577,
              "end": 1588,
              "typeName": {
                "type": "Identifier",
                "start": 1577,
                "end": 1585,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1585,
                "end": 1588,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1586,
                    "end": 1587,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1586,
                      "end": 1587,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1590,
          "end": 1594,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1591,
            "end": 1594,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1593,
              "end": 1594,
              "typeName": {
                "type": "Identifier",
                "start": 1593,
                "end": 1594,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1596,
          "end": 1611,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1597,
            "end": 1611,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1599,
              "end": 1611,
              "typeName": {
                "type": "Identifier",
                "start": 1599,
                "end": 1608,
                "name": "Readwrite",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1608,
                "end": 1611,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1609,
                    "end": 1610,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1609,
                      "end": 1610,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1613,
        "end": 1715,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1619,
            "end": 1625,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1619,
              "end": 1624,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1619,
                "end": 1620,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1623,
                "end": 1624,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1630,
            "end": 1636,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1630,
              "end": 1635,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1630,
                "end": 1631,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1634,
                "end": 1635,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1641,
            "end": 1647,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1641,
              "end": 1646,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1641,
                "end": 1642,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1645,
                "end": 1646,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1652,
            "end": 1658,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1652,
              "end": 1657,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1652,
                "end": 1653,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1656,
                "end": 1657,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1663,
            "end": 1669,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1663,
              "end": 1668,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1663,
                "end": 1664,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1667,
                "end": 1668,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1674,
            "end": 1680,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1674,
              "end": 1679,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1674,
                "end": 1675,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1678,
                "end": 1679,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1685,
            "end": 1691,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1685,
              "end": 1690,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1685,
                "end": 1686,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1689,
                "end": 1690,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1696,
            "end": 1702,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1696,
              "end": 1701,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1696,
                "end": 1697,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1700,
                "end": 1701,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1707,
            "end": 1713,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1707,
              "end": 1712,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1707,
                "end": 1708,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1711,
                "end": 1712,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1570,
        "end": 1573,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1571,
            "end": 1572,
            "name": {
              "type": "Identifier",
              "start": 1571,
              "end": 1572,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1717,
      "end": 1817,
      "id": {
        "type": "Identifier",
        "start": 1722,
        "end": 1725,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1728,
        "end": 1817,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1734,
            "end": 1744,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1734,
              "end": 1735,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1735,
              "end": 1743,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1737,
                "end": 1743
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1749,
            "end": 1771,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1749,
              "end": 1750,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1750,
              "end": 1770,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1752,
                "end": 1770,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1752,
                    "end": 1758
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1761,
                    "end": 1770
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1776,
            "end": 1787,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1776,
              "end": 1777,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1778,
              "end": 1786,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1780,
                "end": 1786
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1792,
            "end": 1815,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1792,
              "end": 1793,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1794,
              "end": 1814,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1796,
                "end": 1814,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1796,
                    "end": 1802
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1805,
                    "end": 1814
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1819,
      "end": 1839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1831,
          "end": 1838,
          "id": {
            "type": "Identifier",
            "start": 1831,
            "end": 1838,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1833,
              "end": 1838,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1835,
                "end": 1838,
                "typeName": {
                  "type": "Identifier",
                  "start": 1835,
                  "end": 1838,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1841,
      "end": 1846,
      "expression": {
        "type": "MemberExpression",
        "start": 1841,
        "end": 1845,
        "object": {
          "type": "Identifier",
          "start": 1841,
          "end": 1843,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1844,
          "end": 1845,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1858,
      "end": 1863,
      "expression": {
        "type": "MemberExpression",
        "start": 1858,
        "end": 1862,
        "object": {
          "type": "Identifier",
          "start": 1858,
          "end": 1860,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1861,
          "end": 1862,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1887,
      "end": 1892,
      "expression": {
        "type": "MemberExpression",
        "start": 1887,
        "end": 1891,
        "object": {
          "type": "Identifier",
          "start": 1887,
          "end": 1889,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1890,
          "end": 1891,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1916,
      "end": 1921,
      "expression": {
        "type": "MemberExpression",
        "start": 1916,
        "end": 1920,
        "object": {
          "type": "Identifier",
          "start": 1916,
          "end": 1918,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1919,
          "end": 1920,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1946,
      "end": 1960,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1946,
        "end": 1959,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1946,
          "end": 1948,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1951,
          "end": 1959,
          "properties": [
            {
              "type": "Property",
              "start": 1953,
              "end": 1957,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1953,
                "end": 1954,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1956,
                "end": 1957,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1971,
      "end": 1991,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1971,
        "end": 1990,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1971,
          "end": 1973,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1976,
          "end": 1990,
          "properties": [
            {
              "type": "Property",
              "start": 1978,
              "end": 1982,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1978,
                "end": 1979,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1981,
                "end": 1982,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 1984,
              "end": 1988,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1984,
                "end": 1985,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 1987,
                "end": 1988,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1992,
      "end": 2018,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1992,
        "end": 2017,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1992,
          "end": 1994,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 1997,
          "end": 2017,
          "properties": [
            {
              "type": "Property",
              "start": 1999,
              "end": 2003,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1999,
                "end": 2000,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2002,
                "end": 2003,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2005,
              "end": 2009,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2005,
                "end": 2006,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2008,
                "end": 2009,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2011,
              "end": 2015,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2011,
                "end": 2012,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2014,
                "end": 2015,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2019,
      "end": 2051,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2019,
        "end": 2050,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2019,
          "end": 2021,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 2024,
          "end": 2050,
          "properties": [
            {
              "type": "Property",
              "start": 2026,
              "end": 2030,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2026,
                "end": 2027,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2029,
                "end": 2030,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2032,
              "end": 2036,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2032,
                "end": 2033,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2035,
                "end": 2036,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2038,
              "end": 2042,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2038,
                "end": 2039,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2041,
                "end": 2042,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2044,
              "end": 2048,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2044,
                "end": 2045,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2047,
                "end": 2048,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2053,
      "end": 2083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2065,
          "end": 2082,
          "id": {
            "type": "Identifier",
            "start": 2065,
            "end": 2082,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2067,
              "end": 2082,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2069,
                "end": 2082,
                "typeName": {
                  "type": "Identifier",
                  "start": 2069,
                  "end": 2077,
                  "name": "Required",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2077,
                  "end": 2082,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2078,
                      "end": 2081,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2078,
                        "end": 2081,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2085,
      "end": 2090,
      "expression": {
        "type": "MemberExpression",
        "start": 2085,
        "end": 2089,
        "object": {
          "type": "Identifier",
          "start": 2085,
          "end": 2087,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2088,
          "end": 2089,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2102,
      "end": 2107,
      "expression": {
        "type": "MemberExpression",
        "start": 2102,
        "end": 2106,
        "object": {
          "type": "Identifier",
          "start": 2102,
          "end": 2104,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2105,
          "end": 2106,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2131,
      "end": 2136,
      "expression": {
        "type": "MemberExpression",
        "start": 2131,
        "end": 2135,
        "object": {
          "type": "Identifier",
          "start": 2131,
          "end": 2133,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2134,
          "end": 2135,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2148,
      "end": 2153,
      "expression": {
        "type": "MemberExpression",
        "start": 2148,
        "end": 2152,
        "object": {
          "type": "Identifier",
          "start": 2148,
          "end": 2150,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 2151,
          "end": 2152,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2166,
      "end": 2180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2166,
        "end": 2179,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2166,
          "end": 2168,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 2171,
          "end": 2179,
          "properties": [
            {
              "type": "Property",
              "start": 2173,
              "end": 2177,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2173,
                "end": 2174,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2176,
                "end": 2177,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2191,
      "end": 2211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2191,
        "end": 2210,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2191,
          "end": 2193,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 2196,
          "end": 2210,
          "properties": [
            {
              "type": "Property",
              "start": 2198,
              "end": 2202,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2198,
                "end": 2199,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2201,
                "end": 2202,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2204,
              "end": 2208,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2204,
                "end": 2205,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2207,
                "end": 2208,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2222,
      "end": 2248,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2222,
        "end": 2247,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2222,
          "end": 2224,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 2227,
          "end": 2247,
          "properties": [
            {
              "type": "Property",
              "start": 2229,
              "end": 2233,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2229,
                "end": 2230,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2232,
                "end": 2233,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2235,
              "end": 2239,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2235,
                "end": 2236,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2238,
                "end": 2239,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2241,
              "end": 2245,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2241,
                "end": 2242,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2244,
                "end": 2245,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2259,
      "end": 2291,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2259,
        "end": 2290,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 2259,
          "end": 2261,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 2264,
          "end": 2290,
          "properties": [
            {
              "type": "Property",
              "start": 2266,
              "end": 2270,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2266,
                "end": 2267,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2269,
                "end": 2270,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2272,
              "end": 2276,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2272,
                "end": 2273,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2275,
                "end": 2276,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2278,
              "end": 2282,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2278,
                "end": 2279,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2281,
                "end": 2282,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 2284,
              "end": 2288,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2284,
                "end": 2285,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 2287,
                "end": 2288,
                "value": 1,
                "raw": "1"
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2293,
      "end": 2346,
      "id": {
        "type": "Identifier",
        "start": 2298,
        "end": 2301,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2304,
        "end": 2346,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2310,
            "end": 2320,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2310,
              "end": 2311,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2311,
              "end": 2319,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2313,
                "end": 2319
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 2325,
            "end": 2344,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 2334,
              "end": 2335,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2335,
              "end": 2343,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2337,
                "end": 2343
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2348,
      "end": 2368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2360,
          "end": 2367,
          "id": {
            "type": "Identifier",
            "start": 2360,
            "end": 2367,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2362,
              "end": 2367,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2364,
                "end": 2367,
                "typeName": {
                  "type": "Identifier",
                  "start": 2364,
                  "end": 2367,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2369,
      "end": 2378,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2369,
        "end": 2377,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2369,
          "end": 2373,
          "object": {
            "type": "Identifier",
            "start": 2369,
            "end": 2371,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2372,
            "end": 2373,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2376,
          "end": 2377,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2379,
      "end": 2388,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2379,
        "end": 2387,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2379,
          "end": 2383,
          "object": {
            "type": "Identifier",
            "start": 2379,
            "end": 2381,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2382,
            "end": 2383,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2386,
          "end": 2387,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2400,
      "end": 2430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2412,
          "end": 2429,
          "id": {
            "type": "Identifier",
            "start": 2412,
            "end": 2429,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2414,
              "end": 2429,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2416,
                "end": 2429,
                "typeName": {
                  "type": "Identifier",
                  "start": 2416,
                  "end": 2424,
                  "name": "Readonly",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2424,
                  "end": 2429,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2425,
                      "end": 2428,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2425,
                        "end": 2428,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2431,
      "end": 2440,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2431,
        "end": 2439,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2431,
          "end": 2435,
          "object": {
            "type": "Identifier",
            "start": 2431,
            "end": 2433,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2434,
            "end": 2435,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2438,
          "end": 2439,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2451,
      "end": 2460,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2451,
        "end": 2459,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2451,
          "end": 2455,
          "object": {
            "type": "Identifier",
            "start": 2451,
            "end": 2453,
            "name": "x4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2454,
            "end": 2455,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2458,
          "end": 2459,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2472,
      "end": 2503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2484,
          "end": 2502,
          "id": {
            "type": "Identifier",
            "start": 2484,
            "end": 2502,
            "name": "x5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2486,
              "end": 2502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2488,
                "end": 2502,
                "typeName": {
                  "type": "Identifier",
                  "start": 2488,
                  "end": 2497,
                  "name": "Readwrite",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2497,
                  "end": 2502,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2498,
                      "end": 2501,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2498,
                        "end": 2501,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2504,
      "end": 2513,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2504,
        "end": 2512,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2504,
          "end": 2508,
          "object": {
            "type": "Identifier",
            "start": 2504,
            "end": 2506,
            "name": "x5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2507,
            "end": 2508,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2511,
          "end": 2512,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2514,
      "end": 2523,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2514,
        "end": 2522,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2514,
          "end": 2518,
          "object": {
            "type": "Identifier",
            "start": 2514,
            "end": 2516,
            "name": "x5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2517,
            "end": 2518,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 2521,
          "end": 2522,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
