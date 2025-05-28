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
              "name": "n",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 41,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 41,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "E1",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
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
        },
        "const": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "E2",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
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
  "start": 0,
  "end": 292,
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
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 91,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 38,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 54,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 52,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 57,
                  "end": 58,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 64,
                "end": 75,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 65,
                  "end": 71,
                  "object": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 74,
                  "end": 75,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 154,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 117,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 115,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 127,
                "end": 138,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 128,
                  "end": 134,
                  "object": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 132,
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 137,
                  "end": 138,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 223,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
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
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 181,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 186,
                  "end": 187,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 193,
                "end": 207,
                "kind": "init",
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
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 201,
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 206,
                  "end": 207,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 292,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 292,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 233,
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
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
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 250,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 255,
                  "end": 256,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 262,
                "end": 276,
                "kind": "init",
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
                      "decorators": [],
                      "name": "keys",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 270,
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 275,
                  "end": 276,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
