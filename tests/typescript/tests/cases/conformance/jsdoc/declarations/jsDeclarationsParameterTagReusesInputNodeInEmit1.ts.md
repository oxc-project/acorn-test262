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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 35,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 33,
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
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 33,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 33,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 90,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 89,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                    "callee": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 84,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 92,
      "end": 116,
      "expression": {
        "type": "AssignmentExpression",
        "start": 92,
        "end": 115,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 92,
          "end": 108,
          "object": {
            "type": "Identifier",
            "start": 92,
            "end": 103,
            "decorators": [],
            "name": "BaseFactory",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 108,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 132,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 132,
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
          "start": 135,
          "end": 146,
          "decorators": [],
          "name": "BaseFactory",
          "optional": false,
          "typeAnnotation": null
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
  "start": 156,
  "end": 340,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 184,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 184,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 340,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 339,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
