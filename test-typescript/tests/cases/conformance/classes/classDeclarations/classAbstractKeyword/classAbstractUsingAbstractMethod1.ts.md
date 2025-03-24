__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 49,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 23,
            "end": 47,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 35,
              "end": 47,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 40,
                  "end": 46
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 96,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 94,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 78,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 78,
              "end": 94,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 81,
                "end": 94,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 83,
                    "end": 92,
                    "argument": {
                      "type": "Literal",
                      "start": 90,
                      "end": 91,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 98,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 114,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 126,
        "end": 158,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 132,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 144,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 144,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 147,
                "end": 155,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 149,
                  "end": 155
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 168,
            "end": 173,
            "callee": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 175,
        "end": 182,
        "callee": {
          "type": "MemberExpression",
          "start": 175,
          "end": 180,
          "object": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 177,
            "end": 180,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 195,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 189,
          "end": 194,
          "callee": {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 249,
      "expression": {
        "type": "CallExpression",
        "start": 241,
        "end": 248,
        "callee": {
          "type": "MemberExpression",
          "start": 241,
          "end": 246,
          "object": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 243,
            "end": 246,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
