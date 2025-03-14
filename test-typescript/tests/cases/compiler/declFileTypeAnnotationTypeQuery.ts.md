__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 531,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 12,
      "end": 81,
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 81,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 27,
            "end": 49,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 34,
              "end": 49,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 49,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 79,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 61,
              "end": 79,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 72,
                "end": 79,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 71,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 70,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 70,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 82,
      "end": 96,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 96,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
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
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 140,
        "end": 157,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 146,
            "end": 155,
            "argument": {
              "type": "Identifier",
              "start": 153,
              "end": 154,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 127,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 139,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 131,
          "end": 139,
          "exprName": {
            "type": "Identifier",
            "start": 138,
            "end": 139,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 191,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 191,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 189,
            "argument": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 171,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 239,
        "end": 258,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 245,
            "end": 256,
            "argument": {
              "type": "MemberExpression",
              "start": 252,
              "end": 255,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 254,
                "end": 255,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 224,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 226,
        "end": 238,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 228,
          "end": 238,
          "exprName": {
            "type": "TSQualifiedName",
            "start": 235,
            "end": 238,
            "left": {
              "type": "Identifier",
              "start": 235,
              "end": 236,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 259,
      "end": 294,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 275,
        "end": 294,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 281,
            "end": 292,
            "argument": {
              "type": "MemberExpression",
              "start": 288,
              "end": 291,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 288,
                "end": 289,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 272,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 376,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 359,
        "end": 376,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 365,
            "end": 374,
            "argument": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 346,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 348,
        "end": 358,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 350,
          "end": 358,
          "exprName": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "decorators": [],
            "name": "g",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 410,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 393,
        "end": 410,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 399,
            "end": 408,
            "argument": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 390,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 450,
      "end": 496,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 478,
        "end": 496,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 484,
            "end": 494,
            "argument": {
              "type": "MemberExpression",
              "start": 491,
              "end": 494,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 491,
                "end": 492,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "decorators": [],
                "name": "g",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 463,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 465,
        "end": 477,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 467,
          "end": 477,
          "exprName": {
            "type": "TSQualifiedName",
            "start": 474,
            "end": 477,
            "left": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 476,
              "end": 477,
              "decorators": [],
              "name": "g",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 497,
      "end": 531,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 513,
        "end": 531,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 519,
            "end": 529,
            "argument": {
              "type": "MemberExpression",
              "start": 526,
              "end": 529,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 526,
                "end": 527,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 528,
                "end": 529,
                "decorators": [],
                "name": "g",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 510,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
