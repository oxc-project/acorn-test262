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
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "start": 20,
              "end": 31
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 48,
                          "end": 54
                        },
                        "init": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 57,
                          "end": 59
                        },
                        "definite": false,
                        "start": 48,
                        "end": 59
                      }
                    ],
                    "declare": false,
                    "start": 44,
                    "end": 60
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
                          "name": "used",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 77
                        },
                        "init": {
                          "type": "Literal",
                          "value": "dummy",
                          "raw": "\"dummy\"",
                          "start": 80,
                          "end": 87
                        },
                        "definite": false,
                        "start": 73,
                        "end": 87
                      }
                    ],
                    "declare": false,
                    "start": 69,
                    "end": 88
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "used",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 101
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "used",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 108
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": "second part",
                          "raw": "\"second part\"",
                          "start": 111,
                          "end": 124
                        },
                        "start": 104,
                        "end": 124
                      },
                      "start": 97,
                      "end": 124
                    },
                    "directive": null,
                    "start": 97,
                    "end": 125
                  }
                ],
                "start": 34,
                "end": 131
              },
              "expression": false,
              "start": 31,
              "end": 131
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 20,
            "end": 131
          }
        ],
        "start": 14,
        "end": 133
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
