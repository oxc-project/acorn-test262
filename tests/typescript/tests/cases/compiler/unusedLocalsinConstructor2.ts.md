__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 133,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 131,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 31,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 131,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 131,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 44,
                    "end": 60,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 48,
                        "end": 59,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 54,
                          "decorators": [],
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 57,
                          "end": 59,
                          "value": 20,
                          "raw": "20"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 69,
                    "end": 88,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 73,
                        "end": 87,
                        "id": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 77,
                          "decorators": [],
                          "name": "used",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 80,
                          "end": 87,
                          "value": "dummy",
                          "raw": "\"dummy\""
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 97,
                    "end": 125,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 97,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 97,
                        "end": 101,
                        "decorators": [],
                        "name": "used",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 104,
                        "end": 124,
                        "left": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 108,
                          "decorators": [],
                          "name": "used",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "start": 111,
                          "end": 124,
                          "value": "second part",
                          "raw": "\"second part\""
                        }
                      }
                    },
                    "directive": null
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
