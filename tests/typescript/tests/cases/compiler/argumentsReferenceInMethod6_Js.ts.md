__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 75,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 12,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 15,
                "end": 73,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 49,
                    "end": 70,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 49,
                      "end": 69,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 49,
                        "end": 57,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 49,
                          "end": 53
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 57,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 69,
                        "decorators": [],
                        "name": "arguments",
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
              "params": [],
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
        "name": "A",
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
