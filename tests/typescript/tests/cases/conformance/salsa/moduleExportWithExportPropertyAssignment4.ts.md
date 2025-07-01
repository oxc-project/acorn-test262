__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 22,
                      "end": 29
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 31,
                        "end": 34
                      },
                      "start": 29,
                      "end": 34
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 22,
                    "end": 34
                  }
                ],
                "start": 20,
                "end": 36
              },
              "start": 18,
              "end": 36
            },
            "start": 12,
            "end": 36
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 36
        }
      ],
      "declare": true,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 69,
              "end": 75
            },
            "start": 67,
            "end": 75
          },
          "start": 63,
          "end": 75
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 78,
          "end": 81
        },
        "start": 76,
        "end": 81
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 82
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 55
            },
            "optional": false,
            "computed": false,
            "start": 41,
            "end": 55
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bothBefore",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 66
          },
          "optional": false,
          "computed": false,
          "start": 41,
          "end": 66
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 69,
          "end": 77
        },
        "start": 41,
        "end": 77
      },
      "directive": null,
      "start": 41,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 79
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "justExport",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 90
          },
          "optional": false,
          "computed": false,
          "start": 78,
          "end": 90
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 93,
          "end": 94
        },
        "start": 78,
        "end": 94
      },
      "directive": null,
      "start": 78,
      "end": 94
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bothBefore",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 95,
          "end": 107
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 110,
          "end": 111
        },
        "start": 95,
        "end": 111
      },
      "directive": null,
      "start": 95,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 123
          },
          "optional": false,
          "computed": false,
          "start": 112,
          "end": 123
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 126,
          "end": 127
        },
        "start": 112,
        "end": 127
      },
      "directive": null,
      "start": 112,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 134
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 142
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "start": 128,
        "end": 146
      },
      "directive": null,
      "start": 128,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 157
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 166,
                  "end": 170
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 171,
                  "end": 172
                },
                "optional": false,
                "computed": false,
                "start": 166,
                "end": 172
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 175,
                "end": 176
              },
              "start": 166,
              "end": 176
            },
            "directive": null,
            "start": 166,
            "end": 176
          }
        ],
        "start": 160,
        "end": 178
      },
      "expression": false,
      "start": 147,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 185
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 193
            },
            "optional": false,
            "computed": false,
            "start": 179,
            "end": 193
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 179,
          "end": 203
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 206,
          "end": 214
        },
        "start": 179,
        "end": 214
      },
      "directive": null,
      "start": 179,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 221
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 229
            },
            "optional": false,
            "computed": false,
            "start": 215,
            "end": 229
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 242
          },
          "optional": false,
          "computed": false,
          "start": 215,
          "end": 242
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 245,
          "end": 253
        },
        "start": 215,
        "end": 253
      },
      "directive": null,
      "start": 215,
      "end": 253
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 254
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 59
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./mod1",
                "raw": "'./mod1'",
                "start": 60,
                "end": 68
              }
            ],
            "optional": false,
            "start": 52,
            "end": 69
          },
          "definite": false,
          "start": 45,
          "end": 69
        }
      ],
      "declare": false,
      "start": 41,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 74
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "justExport",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 85
            },
            "optional": false,
            "computed": false,
            "start": 70,
            "end": 85
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 93
          },
          "optional": false,
          "computed": false,
          "start": 70,
          "end": 93
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 70,
        "end": 95
      },
      "directive": null,
      "start": 70,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 100
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothBefore",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 111
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 111
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 119
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 119
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 96,
        "end": 121
      },
      "directive": null,
      "start": 96,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 135
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothAfter",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 145
            },
            "optional": false,
            "computed": false,
            "start": 131,
            "end": 145
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 153
          },
          "optional": false,
          "computed": false,
          "start": 131,
          "end": 153
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 131,
        "end": 155
      },
      "directive": null,
      "start": 131,
      "end": 155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod1",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 160
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 173
          },
          "optional": false,
          "computed": false,
          "start": 156,
          "end": 173
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 180
        },
        "optional": false,
        "computed": false,
        "start": 156,
        "end": 180
      },
      "directive": null,
      "start": 156,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 180
}
```
