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
                "end": 35
              },
              "start": 18,
              "end": 35
            },
            "start": 12,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
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
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 155
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 163
          },
          "optional": false,
          "computed": false,
          "start": 149,
          "end": 163
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
        },
        "start": 149,
        "end": 167
      },
      "directive": null,
      "start": 149,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 178
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
                  "start": 187,
                  "end": 191
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "optional": false,
                "computed": false,
                "start": 187,
                "end": 193
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 196,
                "end": 197
              },
              "start": 187,
              "end": 197
            },
            "directive": null,
            "start": 187,
            "end": 197
          }
        ],
        "start": 181,
        "end": 199
      },
      "expression": false,
      "start": 168,
      "end": 199
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 149,
  "end": 200
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
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
                    "start": 176,
                    "end": 180
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 181,
                    "end": 182
                  },
                  "optional": false,
                  "computed": false,
                  "start": 176,
                  "end": 182
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 185,
                  "end": 186
                },
                "start": 176,
                "end": 186
              },
              "directive": null,
              "start": 176,
              "end": 186
            }
          ],
          "start": 170,
          "end": 188
        },
        "expression": false,
        "start": 157,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 150,
  "end": 189
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
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 157
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 159
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 159
        },
        "right": {
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
                      "start": 179,
                      "end": 183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 179,
                    "end": 185
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 188,
                    "end": 189
                  },
                  "start": 179,
                  "end": 189
                },
                "directive": null,
                "start": 179,
                "end": 189
              }
            ],
            "start": 173,
            "end": 191
          },
          "expression": false,
          "start": 162,
          "end": 191
        },
        "start": 150,
        "end": 191
      },
      "directive": null,
      "start": 150,
      "end": 191
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 150,
  "end": 192
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
            "name": "both1",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 46
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 55
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 57,
                  "end": 60
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 51,
                "end": 60
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 65,
                  "end": 66
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 62,
                "end": 66
              }
            ],
            "start": 49,
            "end": 68
          },
          "definite": false,
          "start": 41,
          "end": 68
        }
      ],
      "declare": false,
      "start": 37,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "both2",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 116
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "both1",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 124
          },
          "definite": false,
          "start": 111,
          "end": 124
        }
      ],
      "declare": false,
      "start": 107,
      "end": 125
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "both3",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 172
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "both2",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 180
          },
          "definite": false,
          "start": 167,
          "end": 180
        }
      ],
      "declare": false,
      "start": 163,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 183
}
```
