__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 88,
  "end": 452,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 102,
            "end": 114,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 126,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 149,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 137,
            "end": 149,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 137,
              "end": 147,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 147,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 157,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 175,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 160,
              "end": 173,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 162,
                "end": 172,
                "raw": "'toString'",
                "value": "toString"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 183,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 186,
            "end": 191,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 188,
              "end": 191,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 199,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 202,
            "end": 210,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 204,
              "end": 209,
              "raw": "'foo'",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 213,
      "end": 245,
      "body": {
        "type": "TSInterfaceBody",
        "start": 225,
        "end": 245,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 231,
            "end": 243,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 234,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 242,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 224,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 254,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 254,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 265,
            "end": 277,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 265,
              "end": 275,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 265,
                "end": 266,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 267,
                "end": 275,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 303,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 288,
              "end": 301,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 290,
                "end": 300,
                "raw": "'toString'",
                "value": "toString"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 311,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 314,
            "end": 319,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 316,
              "end": 319,
              "decorators": [],
              "name": "bar",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 330,
            "end": 338,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "i",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 332,
              "end": 337,
              "raw": "'bar'",
              "value": "bar"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 364,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 349,
            "end": 364,
            "properties": [
              {
                "type": "Property",
                "start": 355,
                "end": 362,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 358,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 360,
                  "end": 362,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 372,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 375,
            "end": 387,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 375,
              "end": 385,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 377,
                "end": 385,
                "decorators": [],
                "name": "toString",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 389,
      "end": 414,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 393,
          "end": 413,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 393,
            "end": 395,
            "decorators": [],
            "name": "r9",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 398,
            "end": 413,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 398,
              "end": 411,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 400,
                "end": 410,
                "raw": "'toString'",
                "value": "toString"
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 419,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 419,
            "end": 422,
            "decorators": [],
            "name": "r10",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 425,
            "end": 430,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 425,
              "end": 426,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 427,
              "end": 430,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 439,
            "decorators": [],
            "name": "r11",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 442,
            "end": 450,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 444,
              "end": 449,
              "raw": "'foo'",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
