__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Item",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 92,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 82,
          "end": 87,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 87,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 91,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 90,
          "end": 91,
          "typeName": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 73,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 73,
                "decorators": [],
                "name": "Item",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "decorators": [],
            "name": "z1",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 103,
            "end": 112,
            "arguments": [
              {
                "type": "Literal",
                "start": 107,
                "end": 111,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
              "optional": false
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
      "start": 139,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 153,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 145,
            "decorators": [],
            "name": "z2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 148,
            "end": 153,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 148,
              "end": 151,
              "decorators": [],
              "name": "foo",
              "optional": false
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
      "start": 185,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "z3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 194,
            "end": 213,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 198,
                "end": 212,
                "properties": [
                  {
                    "type": "Property",
                    "start": 200,
                    "end": 210,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 204,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 206,
                      "end": 210,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
              "decorators": [],
              "name": "foo",
              "optional": false
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
      "start": 240,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 244,
          "end": 269,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 244,
            "end": 246,
            "decorators": [],
            "name": "z4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 269,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 253,
                "end": 268,
                "properties": [
                  {
                    "type": "Property",
                    "start": 255,
                    "end": 266,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 255,
                      "end": 259,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 261,
                      "end": 266,
                      "raw": "\"abc\"",
                      "value": "abc"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 249,
              "end": 252,
              "decorators": [],
              "name": "foo",
              "optional": false
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
      "start": 298,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 304,
            "decorators": [],
            "name": "z5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 307,
            "end": 333,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 311,
                "end": 332,
                "properties": [
                  {
                    "type": "Property",
                    "start": 313,
                    "end": 324,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 317,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 319,
                      "end": 324,
                      "raw": "\"abc\"",
                      "value": "abc"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 326,
                    "end": 330,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 329,
                      "end": 330,
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 307,
              "end": 310,
              "decorators": [],
              "name": "foo",
              "optional": false
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
      "start": 367,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 371,
          "end": 425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 371,
            "end": 373,
            "decorators": [],
            "name": "z6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 376,
            "end": 425,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 380,
                "end": 401,
                "properties": [
                  {
                    "type": "Property",
                    "start": 382,
                    "end": 393,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 386,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 388,
                      "end": 393,
                      "raw": "\"abc\"",
                      "value": "abc"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 395,
                    "end": 399,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 398,
                      "end": 399,
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 403,
                "end": 424,
                "properties": [
                  {
                    "type": "Property",
                    "start": 405,
                    "end": 416,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 409,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 411,
                      "end": 416,
                      "raw": "\"def\"",
                      "value": "def"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 418,
                    "end": 422,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 418,
                      "end": 419,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 421,
                      "end": 422,
                      "raw": "5",
                      "value": 5
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 376,
              "end": 379,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
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
