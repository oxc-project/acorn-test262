constDeclarations_access_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 20,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
constDeclarations_access_2.ts
```json
{
  "type": "Program",
  "start": 53,
  "end": 410,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 53,
      "end": 102,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 64,
        "end": 101,
        "expression": {
          "type": "Literal",
          "start": 72,
          "end": 100,
          "raw": "'constDeclarations_access_1'",
          "value": "constDeclarations_access_1"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 113,
      "end": 121,
      "expression": {
        "type": "AssignmentExpression",
        "start": 113,
        "end": 120,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 113,
          "end": 116,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 119,
          "end": 120,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 131,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 130,
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "start": 122,
          "end": 125,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 130,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 141,
      "expression": {
        "type": "AssignmentExpression",
        "start": 132,
        "end": 140,
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "start": 132,
          "end": 135,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 139,
          "end": 140,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 142,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 142,
        "end": 150,
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "start": 142,
          "end": 145,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 149,
          "end": 150,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 160,
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "start": 152,
          "end": 155,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 160,
          "raw": "5",
          "value": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 171,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 170,
        "operator": "%=",
        "left": {
          "type": "MemberExpression",
          "start": 162,
          "end": 165,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 169,
          "end": 170,
          "raw": "6",
          "value": 6
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 172,
      "end": 182,
      "expression": {
        "type": "AssignmentExpression",
        "start": 172,
        "end": 181,
        "operator": "<<=",
        "left": {
          "type": "MemberExpression",
          "start": 172,
          "end": 175,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 180,
          "end": 181,
          "raw": "7",
          "value": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 192,
        "operator": ">>=",
        "left": {
          "type": "MemberExpression",
          "start": 183,
          "end": 186,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 191,
          "end": 192,
          "raw": "8",
          "value": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 205,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 204,
        "operator": ">>>=",
        "left": {
          "type": "MemberExpression",
          "start": 194,
          "end": 197,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 203,
          "end": 204,
          "raw": "9",
          "value": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 216,
      "expression": {
        "type": "AssignmentExpression",
        "start": 206,
        "end": 215,
        "operator": "&=",
        "left": {
          "type": "MemberExpression",
          "start": 206,
          "end": 209,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 213,
          "end": 215,
          "raw": "10",
          "value": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 227,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 226,
        "operator": "|=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 220,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 226,
          "raw": "11",
          "value": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 228,
      "end": 238,
      "expression": {
        "type": "AssignmentExpression",
        "start": 228,
        "end": 237,
        "operator": "^=",
        "left": {
          "type": "MemberExpression",
          "start": 228,
          "end": 231,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 235,
          "end": 237,
          "raw": "12",
          "value": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 240,
      "expression": {
        "type": "Identifier",
        "start": 239,
        "end": 240,
        "decorators": [],
        "name": "m",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 247,
      "expression": {
        "type": "UpdateExpression",
        "start": 241,
        "end": 246,
        "argument": {
          "type": "MemberExpression",
          "start": 241,
          "end": 244,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 254,
      "expression": {
        "type": "UpdateExpression",
        "start": 248,
        "end": 253,
        "argument": {
          "type": "MemberExpression",
          "start": 248,
          "end": 251,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "--",
        "prefix": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 261,
      "expression": {
        "type": "UpdateExpression",
        "start": 255,
        "end": 260,
        "argument": {
          "type": "MemberExpression",
          "start": 257,
          "end": 260,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 268,
      "expression": {
        "type": "UpdateExpression",
        "start": 262,
        "end": 267,
        "argument": {
          "type": "MemberExpression",
          "start": 264,
          "end": 267,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "--",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 280,
      "expression": {
        "type": "UpdateExpression",
        "start": 270,
        "end": 279,
        "argument": {
          "type": "MemberExpression",
          "start": 274,
          "end": 277,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 282,
          "end": 288,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 283,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 284,
            "end": 287,
            "raw": "\"x\"",
            "value": "x"
          }
        },
        "right": {
          "type": "Literal",
          "start": 291,
          "end": 292,
          "raw": "0",
          "value": 0
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 316,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 309,
            "end": 316,
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "start": 309,
              "end": 312,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 319,
      "end": 344,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 344,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 328,
        "end": 329,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 330,
          "end": 339,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 331,
            "end": 339,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 333,
              "end": 339
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 352,
      "expression": {
        "type": "CallExpression",
        "start": 345,
        "end": 351,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 347,
            "end": 350,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 354,
      "end": 366,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 363,
        "end": 366,
        "body": []
      },
      "test": {
        "type": "MemberExpression",
        "start": 358,
        "end": 361,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 358,
          "end": 359,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 372,
      "expression": {
        "type": "MemberExpression",
        "start": 368,
        "end": 371,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 368,
          "end": 369,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 370,
          "end": 371,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 379,
      "expression": {
        "type": "MemberExpression",
        "start": 374,
        "end": 377,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 374,
          "end": 375,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 386,
      "expression": {
        "type": "UnaryExpression",
        "start": 381,
        "end": 385,
        "argument": {
          "type": "MemberExpression",
          "start": 382,
          "end": 385,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "-",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 392,
      "expression": {
        "type": "UnaryExpression",
        "start": 387,
        "end": 391,
        "argument": {
          "type": "MemberExpression",
          "start": 388,
          "end": 391,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "operator": "+",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 409,
      "expression": {
        "type": "CallExpression",
        "start": 394,
        "end": 408,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 394,
          "end": 406,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 394,
            "end": 397,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 398,
            "end": 406,
            "decorators": [],
            "name": "toString",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
