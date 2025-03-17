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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Dummy",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 133,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 131,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 32,
              "name": "greeter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 131,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 47,
                  "name": "person",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 64,
                  "name": "person2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 58,
                      "end": 64
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 131,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 76,
                    "end": 92,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 80,
                        "end": 91,
                        "id": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 86,
                          "name": "unused",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 89,
                          "end": 91,
                          "value": 20,
                          "raw": "20"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 125,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 101,
                      "end": 124,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 101,
                        "end": 108,
                        "name": "person2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 111,
                        "end": 124,
                        "value": "dummy value",
                        "raw": "\"dummy value\""
                      }
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
