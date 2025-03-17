__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 41,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 40,
              "value": "s",
              "raw": "\"s\""
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 75,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 49,
        "end": 75,
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 56,
          "name": "E1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 63,
              "end": 73,
              "value": "ENUM_KEY",
              "raw": "\"ENUM_KEY\""
            },
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 57,
          "end": 75,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 59,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 63,
                "end": 73,
                "value": "ENUM_KEY",
                "raw": "\"ENUM_KEY\""
              },
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 96,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 83,
        "end": 96,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 90,
          "name": "E2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "members": [
          {
            "type": "TSEnumMember",
            "start": 93,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ],
        "const": false,
        "declare": false,
        "body": {
          "type": "TSEnumBody",
          "start": 91,
          "end": 96,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 93,
              "end": 94,
              "id": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "initializer": null,
              "computed": false
            }
          ]
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "name": "keys",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 38,
            "name": "t1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 41,
            "end": 91,
            "properties": [
              {
                "type": "Property",
                "start": 47,
                "end": 58,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 54,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 52,
                    "name": "keys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 57,
                  "end": 58,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 64,
                "end": 75,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 65,
                  "end": 71,
                  "object": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "name": "keys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "n",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 74,
                  "end": 75,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "name": "t2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 104,
            "end": 154,
            "properties": [
              {
                "type": "Property",
                "start": 110,
                "end": 121,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 117,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 115,
                    "name": "keys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 127,
                "end": 138,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 128,
                  "end": 134,
                  "object": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 132,
                    "name": "keys",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 137,
                  "end": 138,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "name": "t3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 167,
            "end": 223,
            "properties": [
              {
                "type": "Property",
                "start": 173,
                "end": 187,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 183,
                  "object": {
                    "type": "MemberExpression",
                    "start": 174,
                    "end": 181,
                    "object": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 178,
                      "name": "keys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 181,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 186,
                  "end": 187,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 193,
                "end": 207,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 194,
                  "end": 203,
                  "object": {
                    "type": "MemberExpression",
                    "start": 194,
                    "end": 201,
                    "object": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 198,
                      "name": "keys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 201,
                      "name": "E1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 206,
                  "end": 207,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 233,
            "name": "t4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 236,
            "end": 292,
            "properties": [
              {
                "type": "Property",
                "start": 242,
                "end": 256,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 243,
                  "end": 252,
                  "object": {
                    "type": "MemberExpression",
                    "start": 243,
                    "end": 250,
                    "object": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 247,
                      "name": "keys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 250,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 255,
                  "end": 256,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 262,
                "end": 276,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 272,
                  "object": {
                    "type": "MemberExpression",
                    "start": 263,
                    "end": 270,
                    "object": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "name": "keys",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 270,
                      "name": "E2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 275,
                  "end": 276,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
