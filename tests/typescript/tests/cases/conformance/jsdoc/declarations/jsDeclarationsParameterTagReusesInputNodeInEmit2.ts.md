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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "start": 17,
              "end": 28
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
                "start": 31,
                "end": 33
              },
              "expression": false,
              "start": 28,
              "end": 33
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 33
          }
        ],
        "start": 11,
        "end": 35
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 54
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 84
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 76,
                    "end": 86
                  },
                  "start": 69,
                  "end": 87
                }
              ],
              "start": 63,
              "end": 89
            },
            "id": null,
            "generator": false,
            "start": 57,
            "end": 89
          },
          "definite": false,
          "start": 43,
          "end": 89
        }
      ],
      "declare": false,
      "start": 37,
      "end": 90
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
            "name": "BaseFactory",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 92,
          "end": 108
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 115
        },
        "start": 92,
        "end": 115
      },
      "directive": null,
      "start": 92,
      "end": 116
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
            "start": 118,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 118,
          "end": 132
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseFactory",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 146
        },
        "start": 118,
        "end": 146
      },
      "directive": null,
      "start": 118,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 175
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "base",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 183
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "base",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 205
                  },
                  "start": 194,
                  "end": 206
                }
              ],
              "start": 188,
              "end": 208
            },
            "id": null,
            "generator": false,
            "start": 178,
            "end": 208
          },
          "definite": false,
          "start": 171,
          "end": 208
        }
      ],
      "declare": false,
      "start": 165,
      "end": 209
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 165,
  "end": 209
}
```
