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
  "end": 230,
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
      "end": 154,
      "expression": {
        "type": "AssignmentExpression",
        "start": 78,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 78,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 84,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 101,
                "end": 111,
                "decorators": [],
                "name": "justExport",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 113,
                "end": 114,
                "value": 1,
                "raw": "1"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 120,
              "end": 133,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 120,
                "end": 130,
                "decorators": [],
                "name": "bothBefore",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 132,
                "end": 133,
                "value": 2,
                "raw": "2"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 139,
              "end": 151,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 139,
                "end": 148,
                "decorators": [],
                "name": "bothAfter",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "value": 3,
                "raw": "3"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 155,
      "end": 190,
      "expression": {
        "type": "AssignmentExpression",
        "start": 155,
        "end": 190,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 155,
          "end": 179,
          "object": {
            "type": "MemberExpression",
            "start": 155,
            "end": 169,
            "object": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 162,
              "end": 169,
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
            "start": 170,
            "end": 179,
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
          "start": 182,
          "end": 190,
          "value": "string",
          "raw": "'string'"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 229,
      "expression": {
        "type": "AssignmentExpression",
        "start": 191,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 191,
          "end": 218,
          "object": {
            "type": "MemberExpression",
            "start": 191,
            "end": 205,
            "object": {
              "type": "Identifier",
              "start": 191,
              "end": 197,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 198,
              "end": 205,
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
            "start": 206,
            "end": 218,
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
          "start": 221,
          "end": 229,
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
  "end": 261,
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
      "start": 167,
      "end": 191,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 191,
        "callee": {
          "type": "MemberExpression",
          "start": 167,
          "end": 189,
          "object": {
            "type": "MemberExpression",
            "start": 167,
            "end": 181,
            "object": {
              "type": "Identifier",
              "start": 167,
              "end": 171,
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 172,
              "end": 181,
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
            "start": 182,
            "end": 189,
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
      "start": 237,
      "end": 261,
      "expression": {
        "type": "MemberExpression",
        "start": 237,
        "end": 261,
        "object": {
          "type": "MemberExpression",
          "start": 237,
          "end": 254,
          "object": {
            "type": "Identifier",
            "start": 237,
            "end": 241,
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 242,
            "end": 254,
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
          "start": 255,
          "end": 261,
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
