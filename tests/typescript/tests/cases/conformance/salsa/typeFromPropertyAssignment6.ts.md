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
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 12,
        "end": 14
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 14
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 15
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
            "name": "Outer",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 5
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 11
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
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
                  "name": "messages",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 36
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
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 48,
                          "end": 50
                        },
                        "start": 41,
                        "end": 50
                      }
                    ],
                    "start": 39,
                    "end": 52
                  },
                  "expression": false,
                  "start": 36,
                  "end": 52
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 28,
                "end": 52
              }
            ],
            "start": 22,
            "end": 54
          },
          "abstract": false,
          "declare": false,
          "start": 14,
          "end": 54
        },
        "start": 0,
        "end": 54
      },
      "directive": null,
      "start": 0,
      "end": 54
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 88
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 90
        },
        "optional": false,
        "computed": false,
        "start": 83,
        "end": 90
      },
      "directive": null,
      "start": 83,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
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
            "name": "msgs",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 11,
                  "end": 16
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 18
                },
                "optional": false,
                "computed": false,
                "start": 11,
                "end": 18
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "messages",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 27
              },
              "optional": false,
              "computed": false,
              "start": 11,
              "end": 27
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 11,
            "end": 29
          },
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inner",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 81
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 83,
        "end": 86
      },
      "expression": false,
      "start": 65,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
}
```
