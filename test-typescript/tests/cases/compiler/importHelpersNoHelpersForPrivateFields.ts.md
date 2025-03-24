__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 114,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 114,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 37,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 29,
                "name": "field"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 32,
                "end": 36,
                "raw": "true",
                "value": true
              }
            },
            {
              "type": "MethodDefinition",
              "start": 42,
              "end": 112,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 43,
                "end": 112,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 46,
                  "end": 112,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 56,
                      "end": 82,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 56,
                        "end": 81,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 56,
                          "end": 67,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 61,
                            "end": 67,
                            "name": "field"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 81,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 75,
                            "end": 81,
                            "name": "field"
                          }
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 91,
                      "end": 106,
                      "directive": null,
                      "expression": {
                        "type": "BinaryExpression",
                        "start": 91,
                        "end": 105,
                        "operator": "in",
                        "left": {
                          "type": "PrivateIdentifier",
                          "start": 91,
                          "end": 97,
                          "name": "field"
                        },
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
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
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 9,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
