__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 53,
  "end": 409,
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 64,
        "end": 101,
        "expression": {
          "type": "Literal",
          "start": 72,
          "end": 100,
          "value": "constDeclarations_access_1",
          "raw": "'constDeclarations_access_1'"
        }
      },
      "importKind": "value"
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
          "object": {
            "type": "Identifier",
            "start": 113,
            "end": 114,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 119,
          "end": 120,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 129,
          "end": 130,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 134,
            "end": 135,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 139,
          "end": 140,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 144,
            "end": 145,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 149,
          "end": 150,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 155,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 159,
          "end": 160,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 169,
          "end": 170,
          "value": 6,
          "raw": "6"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 180,
          "end": 181,
          "value": 7,
          "raw": "7"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 191,
          "end": 192,
          "value": 8,
          "raw": "8"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 203,
          "end": 204,
          "value": 9,
          "raw": "9"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 213,
          "end": 215,
          "value": 10,
          "raw": "10"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 218,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 226,
          "value": 11,
          "raw": "11"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 228,
            "end": 229,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 231,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 235,
          "end": 237,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 247,
      "expression": {
        "type": "UpdateExpression",
        "start": 241,
        "end": 246,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 241,
          "end": 244,
          "object": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 254,
      "expression": {
        "type": "UpdateExpression",
        "start": 248,
        "end": 253,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "MemberExpression",
          "start": 248,
          "end": 251,
          "object": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 261,
      "expression": {
        "type": "UpdateExpression",
        "start": 255,
        "end": 260,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 257,
          "end": 260,
          "object": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 268,
      "expression": {
        "type": "UpdateExpression",
        "start": 262,
        "end": 267,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 264,
          "end": 267,
          "object": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 280,
      "expression": {
        "type": "UpdateExpression",
        "start": 270,
        "end": 279,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 274,
          "end": 277,
          "object": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 276,
            "end": 277,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 283,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 284,
            "end": 287,
            "value": "x",
            "raw": "\"x\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 291,
          "end": 292,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 317,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 309,
            "end": 316,
            "left": {
              "type": "MemberExpression",
              "start": 309,
              "end": 312,
              "object": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 315,
              "end": 316,
              "value": 1,
              "raw": "1"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 319,
      "end": 344,
      "id": {
        "type": "Identifier",
        "start": 328,
        "end": 329,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 344,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 345,
      "end": 352,
      "expression": {
        "type": "CallExpression",
        "start": 345,
        "end": 351,
        "callee": {
          "type": "Identifier",
          "start": 345,
          "end": 346,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 347,
            "end": 350,
            "object": {
              "type": "Identifier",
              "start": 347,
              "end": 348,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "IfStatement",
      "start": 354,
      "end": 366,
      "test": {
        "type": "MemberExpression",
        "start": 358,
        "end": 361,
        "object": {
          "type": "Identifier",
          "start": 358,
          "end": 359,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 360,
          "end": 361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 363,
        "end": 366,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 372,
      "expression": {
        "type": "MemberExpression",
        "start": 368,
        "end": 371,
        "object": {
          "type": "Identifier",
          "start": 368,
          "end": 369,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 370,
          "end": 371,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 379,
      "expression": {
        "type": "MemberExpression",
        "start": 374,
        "end": 377,
        "object": {
          "type": "Identifier",
          "start": 374,
          "end": 375,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 376,
          "end": 377,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 386,
      "expression": {
        "type": "UnaryExpression",
        "start": 381,
        "end": 385,
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "start": 382,
          "end": 385,
          "object": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 392,
      "expression": {
        "type": "UnaryExpression",
        "start": 387,
        "end": 391,
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "start": 388,
          "end": 391,
          "object": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 394,
      "end": 409,
      "expression": {
        "type": "CallExpression",
        "start": 394,
        "end": 408,
        "callee": {
          "type": "MemberExpression",
          "start": 394,
          "end": 406,
          "object": {
            "type": "MemberExpression",
            "start": 394,
            "end": 397,
            "object": {
              "type": "Identifier",
              "start": 394,
              "end": 395,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 398,
            "end": 406,
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
