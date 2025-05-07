__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 36,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 36,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 34,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 82,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 63,
          "end": 75,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 75,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 69,
              "end": 75
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 81,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 78,
          "end": 81
        }
      },
      "typeParameters": null
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
  "start": 41,
  "end": 254,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 77,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 66,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 41,
            "end": 55,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 47,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 55,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 66,
            "decorators": [],
            "name": "bothBefore",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 77,
          "raw": "'string'",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 78,
          "end": 90,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 90,
            "decorators": [],
            "name": "justExport",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "raw": "4",
          "value": 4,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 111,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 107,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 97,
            "end": 107,
            "decorators": [],
            "name": "bothBefore",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 110,
          "end": 111,
          "raw": "2",
          "value": 2,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 123,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 128,
          "end": 142,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 134,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 142,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 160,
        "end": 178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 166,
            "end": 176,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 166,
              "end": 176,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 166,
                "end": 172,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 166,
                  "end": 170
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 175,
                "end": 176,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
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
        "start": 156,
        "end": 157,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 214,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 214,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 203,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 179,
            "end": 193,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 193,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 203,
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 206,
          "end": 214,
          "raw": "'string'",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 215,
          "end": 242,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 215,
            "end": 229,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 215,
              "end": 221,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 222,
              "end": 229,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 242,
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 245,
          "end": 253,
          "raw": "'string'",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
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
  "start": 41,
  "end": 180,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 52,
            "end": 69,
            "arguments": [
              {
                "type": "Literal",
                "start": 60,
                "end": 68,
                "raw": "'./mod1'",
                "value": "./mod1",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 95,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 70,
          "end": 93,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 70,
            "end": 85,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 75,
              "end": 85,
              "decorators": [],
              "name": "justExport",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 93,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 121,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 121,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 96,
          "end": 119,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 96,
            "end": 111,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 101,
              "end": 111,
              "decorators": [],
              "name": "bothBefore",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 119,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 155,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 155,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 131,
          "end": 153,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 131,
            "end": 145,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 136,
              "end": 145,
              "decorators": [],
              "name": "bothAfter",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 180,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 156,
        "end": 180,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 156,
          "end": 173,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 161,
            "end": 173,
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 174,
          "end": 180,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
