__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 55,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 96,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 59,
                "end": 96,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 90,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 69,
                      "end": 89,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 69,
                        "end": 85,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 69,
                          "end": 73
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 85,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "a",
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
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
        "end": 7,
        "decorators": [],
        "name": "C",
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
