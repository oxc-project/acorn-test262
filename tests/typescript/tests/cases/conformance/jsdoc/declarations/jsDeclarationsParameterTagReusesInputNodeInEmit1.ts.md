__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 35,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 28,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 33,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 33,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 54,
            "decorators": [],
            "name": "BaseFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 57,
            "end": 89,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 63,
              "end": 89,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 69,
                  "end": 87,
                  "argument": {
                    "type": "NewExpression",
                    "start": 76,
                    "end": 86,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 116,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 115,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 92,
          "end": 108,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 92,
            "end": 103,
            "decorators": [],
            "name": "BaseFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 108,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 111,
          "end": 115,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 132,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 135,
          "end": 146,
          "decorators": [],
          "name": "BaseFactory",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 156,
  "end": 340,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 179,
            "decorators": [],
            "name": "couldntThinkOfAny",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 182,
            "end": 184,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 306,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 309,
            "end": 339,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 319,
              "end": 339,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 325,
                  "end": 337,
                  "argument": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 336,
                    "decorators": [],
                    "name": "base",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 310,
                "end": 314,
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
