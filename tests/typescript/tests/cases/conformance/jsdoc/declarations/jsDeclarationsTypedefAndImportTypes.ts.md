__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Conn",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 58
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 76
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 79,
                "end": 81
              },
              "expression": false,
              "start": 76,
              "end": 81
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 65,
            "end": 81
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 90
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 93,
              "end": 94
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 86,
            "end": 95
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 106
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 109,
                "end": 111
              },
              "expression": false,
              "start": 106,
              "end": 111
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 100,
            "end": 111
          }
        ],
        "start": 59,
        "end": 113
      },
      "abstract": false,
      "declare": false,
      "start": 48,
      "end": 113
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
            "start": 115,
            "end": 121
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 129
          },
          "optional": false,
          "computed": false,
          "start": 115,
          "end": 129
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Conn",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 136
        },
        "start": 115,
        "end": 136
      },
      "directive": null,
      "start": 115,
      "end": 137
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 48,
  "end": 138
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 55
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 112
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                }
              ],
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
                          "start": 126,
                          "end": 130
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "connItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 131,
                          "end": 139
                        },
                        "optional": false,
                        "computed": false,
                        "start": 126,
                        "end": 139
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 142,
                          "end": 143
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 148
                        },
                        "optional": false,
                        "computed": false,
                        "start": 142,
                        "end": 148
                      },
                      "start": 126,
                      "end": 148
                    },
                    "directive": null,
                    "start": 126,
                    "end": 149
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 207,
                          "end": 211
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "another",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 212,
                          "end": 219
                        },
                        "optional": false,
                        "computed": false,
                        "start": 207,
                        "end": 219
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 222,
                        "end": 224
                      },
                      "start": 207,
                      "end": 224
                    },
                    "directive": null,
                    "start": 207,
                    "end": 225
                  }
                ],
                "start": 116,
                "end": 231
              },
              "expression": false,
              "start": 112,
              "end": 231
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 231
          }
        ],
        "start": 56,
        "end": 233
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 233
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
            "start": 235,
            "end": 241
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 249
          },
          "optional": false,
          "computed": false,
          "start": 235,
          "end": 249
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
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 262
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Wrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 262
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 258,
              "end": 262
            }
          ],
          "start": 252,
          "end": 264
        },
        "start": 235,
        "end": 264
      },
      "directive": null,
      "start": 235,
      "end": 265
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 265
}
```
