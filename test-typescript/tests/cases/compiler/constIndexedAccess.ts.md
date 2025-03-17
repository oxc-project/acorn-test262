__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 399,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 2,
      "end": 42,
      "body": {
        "type": "TSEnumBody",
        "start": 21,
        "end": 42,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 27,
            "end": 31,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 40,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 20,
        "decorators": [],
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 99,
      "body": {
        "type": "TSInterfaceBody",
        "start": 66,
        "end": 99,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 82,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 72,
              "end": 73,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 87,
            "end": 97,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 87,
              "end": 88,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 65,
        "decorators": [],
        "name": "indexAccess",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 122,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 122,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 122,
                  "decorators": [],
                  "name": "indexAccess",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 140,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 133,
            "end": 140,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 133,
              "end": 137,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 138,
              "end": 139,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 150,
            "end": 157,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 150,
              "end": 154,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 166,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 169,
            "end": 187,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 169,
              "end": 173,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 174,
              "end": 186,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 174,
                "end": 181,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 182,
                "end": 186,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 216,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 195,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 198,
            "end": 215,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 198,
              "end": 202,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 203,
              "end": 214,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 203,
                "end": 210,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 211,
                "end": 214,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 218,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 224,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 227,
            "end": 248,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 227,
              "end": 231,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 232,
              "end": 247,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 240,
                "end": 246,
                "raw": "\"zero\"",
                "value": "zero"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 259,
            "end": 279,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 259,
              "end": 263,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 264,
              "end": 278,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 264,
                "end": 271,
                "decorators": [],
                "name": "numbers",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 272,
                "end": 277,
                "raw": "\"one\"",
                "value": "one"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 282,
      "end": 324,
      "body": {
        "type": "TSEnumBody",
        "start": 303,
        "end": 324,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 309,
            "end": 313,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 309,
              "end": 313,
              "decorators": [],
              "name": "zero",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 319,
            "end": 322,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 302,
        "decorators": [],
        "name": "numbersNotConst",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 332,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 335,
            "end": 361,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 335,
              "end": 339,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 340,
              "end": 360,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 340,
                "end": 355,
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 356,
                "end": 360,
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 369,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 372,
            "end": 397,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 372,
              "end": 376,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 377,
              "end": 396,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 377,
                "end": 392,
                "decorators": [],
                "name": "numbersNotConst",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 393,
                "end": 396,
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
