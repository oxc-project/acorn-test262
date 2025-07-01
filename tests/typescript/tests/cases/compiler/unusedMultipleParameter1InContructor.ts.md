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
        "name": "Dummy",
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
              "start": 18,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "person",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 38,
                      "end": 44
                    },
                    "start": 36,
                    "end": 44
                  },
                  "start": 30,
                  "end": 44
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "person2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 55,
                      "end": 61
                    },
                    "start": 53,
                    "end": 61
                  },
                  "start": 46,
                  "end": 61
                }
              ],
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
                          "start": 77,
                          "end": 83
                        },
                        "init": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 86,
                          "end": 88
                        },
                        "definite": false,
                        "start": 77,
                        "end": 88
                      }
                    ],
                    "declare": false,
                    "start": 73,
                    "end": 89
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "person2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 105
                      },
                      "right": {
                        "type": "Literal",
                        "value": "Dummy value",
                        "raw": "\"Dummy value\"",
                        "start": 108,
                        "end": 121
                      },
                      "start": 98,
                      "end": 121
                    },
                    "directive": null,
                    "start": 98,
                    "end": 122
                  }
                ],
                "start": 63,
                "end": 128
              },
              "expression": false,
              "start": 29,
              "end": 128
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 128
          }
        ],
        "start": 12,
        "end": 130
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
