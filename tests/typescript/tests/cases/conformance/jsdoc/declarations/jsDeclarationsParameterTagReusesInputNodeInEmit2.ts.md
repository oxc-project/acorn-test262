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
  "start": 165,
  "end": 209,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 208,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 175,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 178,
            "end": 208,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 188,
              "end": 208,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 194,
                  "end": 206,
                  "argument": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 205,
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
                "start": 179,
                "end": 183,
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
