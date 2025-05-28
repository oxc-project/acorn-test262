__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 121,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Square",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 121,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 37,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 36,
              "decorators": [],
              "name": "sideLength",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 119,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 53,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 53,
              "end": 119,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 54,
                  "end": 72,
                  "decorators": [],
                  "name": "sideLength",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 119,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 113,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 84,
                      "end": 112,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 99,
                        "object": {
                          "type": "ThisExpression",
                          "start": 84,
                          "end": 88
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 99,
                          "decorators": [],
                          "name": "sideLength",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 112,
                        "decorators": [],
                        "name": "sideLength",
                        "optional": false,
                        "typeAnnotation": null
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
