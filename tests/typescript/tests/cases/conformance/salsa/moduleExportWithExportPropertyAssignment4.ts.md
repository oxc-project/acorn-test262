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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 36,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 29,
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 34,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 41,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 66,
          "object": {
            "type": "MemberExpression",
            "start": 41,
            "end": 55,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 47,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 48,
              "end": 55,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 66,
            "decorators": [],
            "name": "bothBefore",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 69,
          "end": 77,
          "value": "string",
          "raw": "'string'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 94,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 78,
          "end": 90,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 80,
            "end": 90,
            "decorators": [],
            "name": "justExport",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 93,
          "end": 94,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 95,
      "end": 111,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 95,
          "end": 107,
          "object": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 97,
            "end": 107,
            "decorators": [],
            "name": "bothBefore",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 110,
          "end": 111,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 112,
          "end": 123,
          "object": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 126,
          "end": 127,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 146,
      "expression": {
        "type": "AssignmentExpression",
        "start": 128,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 128,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 134,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 135,
            "end": 142,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 157,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 160,
        "end": 178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 166,
            "end": 176,
            "expression": {
              "type": "AssignmentExpression",
              "start": 166,
              "end": 176,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 166,
                "end": 172,
                "object": {
                  "type": "ThisExpression",
                  "start": 166,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 175,
                "end": 176,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 214,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 214,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 203,
          "object": {
            "type": "MemberExpression",
            "start": 179,
            "end": 193,
            "object": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 186,
              "end": 193,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 203,
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 206,
          "end": 214,
          "value": "string",
          "raw": "'string'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 215,
      "end": 253,
      "expression": {
        "type": "AssignmentExpression",
        "start": 215,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 215,
          "end": 242,
          "object": {
            "type": "MemberExpression",
            "start": 215,
            "end": 229,
            "object": {
              "type": "Identifier",
              "start": 215,
              "end": 221,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 222,
              "end": 229,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 242,
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 245,
          "end": 253,
          "value": "string",
          "raw": "'string'"
        }
      },
      "directive": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 69,
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
            "callee": {
              "type": "Identifier",
              "start": 52,
              "end": 59,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 60,
                "end": 68,
                "value": "./mod1",
                "raw": "'./mod1'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 95,
      "expression": {
        "type": "CallExpression",
        "start": 70,
        "end": 95,
        "callee": {
          "type": "MemberExpression",
          "start": 70,
          "end": 93,
          "object": {
            "type": "MemberExpression",
            "start": 70,
            "end": 85,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 75,
              "end": 85,
              "decorators": [],
              "name": "justExport",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 93,
            "decorators": [],
            "name": "toFixed",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 121,
      "expression": {
        "type": "CallExpression",
        "start": 96,
        "end": 121,
        "callee": {
          "type": "MemberExpression",
          "start": 96,
          "end": 119,
          "object": {
            "type": "MemberExpression",
            "start": 96,
            "end": 111,
            "object": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 101,
              "end": 111,
              "decorators": [],
              "name": "bothBefore",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 112,
            "end": 119,
            "decorators": [],
            "name": "toFixed",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 131,
      "end": 155,
      "expression": {
        "type": "CallExpression",
        "start": 131,
        "end": 155,
        "callee": {
          "type": "MemberExpression",
          "start": 131,
          "end": 153,
          "object": {
            "type": "MemberExpression",
            "start": 131,
            "end": 145,
            "object": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 136,
              "end": 145,
              "decorators": [],
              "name": "bothAfter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 146,
            "end": 153,
            "decorators": [],
            "name": "toFixed",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 180,
      "expression": {
        "type": "MemberExpression",
        "start": 156,
        "end": 180,
        "object": {
          "type": "MemberExpression",
          "start": 156,
          "end": 173,
          "object": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 161,
            "end": 173,
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "property": {
          "type": "Identifier",
          "start": 174,
          "end": 180,
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
