a.ts
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
              "name": "n",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 41,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 40,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 40,
              "raw": "\"s\"",
              "value": "s"
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 75,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 49,
        "end": 75,
        "body": {
          "type": "TSEnumBody",
          "start": 57,
          "end": 75,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 59,
              "end": 73,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "initializer": {
                "type": "Literal",
                "start": 63,
                "end": 73,
                "raw": "\"ENUM_KEY\"",
                "value": "ENUM_KEY"
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 54,
          "end": 56,
          "decorators": [],
          "name": "E1",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 83,
        "end": 96,
        "body": {
          "type": "TSEnumBody",
          "start": 91,
          "end": 96,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 93,
              "end": 94,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 93,
                "end": 94,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          ]
        },
        "const": false,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 88,
          "end": 90,
          "decorators": [],
          "name": "E2",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"./a\"",
        "value": "./a"
      },
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
            "optional": false
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 38,
            "decorators": [],
            "name": "t1",
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 48,
                  "end": 54,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 52,
                    "decorators": [],
                    "name": "keys",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 57,
                  "end": 58,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 64,
                "end": 75,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 65,
                  "end": 71,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "keys",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "n",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 74,
                  "end": 75,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 101,
            "decorators": [],
            "name": "t2",
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 117,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 115,
                    "decorators": [],
                    "name": "keys",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 120,
                  "end": 121,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 127,
                "end": 138,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 128,
                  "end": 134,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 132,
                    "decorators": [],
                    "name": "keys",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 137,
                  "end": 138,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "decorators": [],
            "name": "t3",
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 183,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 174,
                    "end": 181,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 178,
                      "decorators": [],
                      "name": "keys",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 179,
                      "end": 181,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 186,
                  "end": 187,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 193,
                "end": 207,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 194,
                  "end": 203,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 194,
                    "end": 201,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 198,
                      "decorators": [],
                      "name": "keys",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 201,
                      "decorators": [],
                      "name": "E1",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 203,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 206,
                  "end": 207,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 233,
            "decorators": [],
            "name": "t4",
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 243,
                  "end": 252,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 243,
                    "end": 250,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 247,
                      "decorators": [],
                      "name": "keys",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 248,
                      "end": 250,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 255,
                  "end": 256,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 262,
                "end": 276,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 263,
                  "end": 272,
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "start": 263,
                    "end": 270,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 267,
                      "decorators": [],
                      "name": "keys",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 270,
                      "decorators": [],
                      "name": "E2",
                      "optional": false
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 275,
                  "end": 276,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
