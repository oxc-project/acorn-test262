__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 134,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 134,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 134,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 47,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 38,
              "decorators": [],
              "name": "_fullName",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 40,
                "end": 46
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 132,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "decorators": [],
              "name": "fullName",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 73,
              "end": 132,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 132,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 101,
                    "end": 126,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 101,
                      "end": 125,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 101,
                        "end": 115,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 115,
                          "decorators": [],
                          "name": "_fullName",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 125,
                        "decorators": [],
                        "name": "newName",
                        "optional": false,
                        "typeAnnotation": null
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
                  "start": 74,
                  "end": 89,
                  "decorators": [],
                  "name": "newName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 83,
                      "end": 89
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
        "end": 14,
        "decorators": [],
        "name": "Employee",
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
