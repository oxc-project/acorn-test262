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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 84
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 78,
          "end": 92
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "justExport",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 111
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 113,
                "end": 114
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 101,
              "end": 114
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothBefore",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 130
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 132,
                "end": 133
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 120,
              "end": 133
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bothAfter",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 148
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 150,
                "end": 151
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 139,
              "end": 151
            }
          ],
          "start": 95,
          "end": 154
        },
        "start": 78,
        "end": 154
      },
      "directive": null,
      "start": 78,
      "end": 154
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
              "start": 155,
              "end": 161
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 169
            },
            "optional": false,
            "computed": false,
            "start": 155,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bothAfter",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 179
          },
          "optional": false,
          "computed": false,
          "start": 155,
          "end": 179
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 182,
          "end": 190
        },
        "start": 155,
        "end": 190
      },
      "directive": null,
      "start": 155,
      "end": 190
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
              "start": 191,
              "end": 197
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 205
            },
            "optional": false,
            "computed": false,
            "start": 191,
            "end": 205
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 191,
          "end": 218
        },
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "'string'",
          "start": 221,
          "end": 229
        },
        "start": 191,
        "end": 229
      },
      "directive": null,
      "start": 191,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 230
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
              "start": 167,
              "end": 171
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothAfter",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 181
            },
            "optional": false,
            "computed": false,
            "start": 167,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 189
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 189
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 167,
        "end": 191
      },
      "directive": null,
      "start": 167,
      "end": 191
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
            "start": 237,
            "end": 241
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "justProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 254
          },
          "optional": false,
          "computed": false,
          "start": 237,
          "end": 254
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 261
        },
        "optional": false,
        "computed": false,
        "start": 237,
        "end": 261
      },
      "directive": null,
      "start": 237,
      "end": 261
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 41,
  "end": 261
}
```
