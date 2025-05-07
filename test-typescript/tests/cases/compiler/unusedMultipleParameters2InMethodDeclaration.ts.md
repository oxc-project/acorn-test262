__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 148,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 32,
              "decorators": [],
              "name": "greeter",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 148,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 93,
                    "end": 109,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 97,
                        "end": 108,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 103,
                          "decorators": [],
                          "name": "unused",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 106,
                          "end": 108,
                          "raw": "20",
                          "value": 20,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 118,
                    "end": 142,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 118,
                      "end": 141,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 125,
                        "decorators": [],
                        "name": "person2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 128,
                        "end": 141,
                        "raw": "\"dummy value\"",
                        "value": "dummy value",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 47,
                  "decorators": [],
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 64,
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 58,
                      "end": 64
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 66,
                  "end": 81,
                  "decorators": [],
                  "name": "person3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 73,
                    "end": 81,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 75,
                      "end": 81
                    }
                  }
                }
              ],
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
        "end": 11,
        "decorators": [],
        "name": "Dummy",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
