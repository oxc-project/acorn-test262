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
  "end": 230,
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
      "end": 154,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 78,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 84,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 95,
          "end": 154,
          "properties": [
            {
              "type": "Property",
              "start": 101,
              "end": 114,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 111,
                "decorators": [],
                "name": "justExport",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 120,
              "end": 133,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 130,
                "decorators": [],
                "name": "bothBefore",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 132,
                "end": 133,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 139,
              "end": 151,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 148,
                "decorators": [],
                "name": "bothAfter",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 190,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 155,
        "end": 190,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 155,
          "end": 179,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 155,
            "end": 169,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 162,
              "end": 169,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 179,
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 182,
          "end": 190,
          "raw": "'string'",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 191,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 191,
          "end": 218,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 191,
            "end": 205,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 191,
              "end": 197,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 198,
              "end": 205,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 206,
            "end": 218,
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 229,
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
  "end": 261,
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
      "start": 167,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 191,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 167,
          "end": 189,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 167,
            "end": 181,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 172,
              "end": 181,
              "decorators": [],
              "name": "bothAfter",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 189,
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
      "start": 237,
      "end": 261,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 237,
        "end": 261,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 237,
          "end": 254,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 254,
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 255,
          "end": 261,
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
