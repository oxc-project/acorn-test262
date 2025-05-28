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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 114,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 114,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 37,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 29,
                "name": "field"
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 32,
                "end": 36,
                "value": true,
                "raw": "true"
              },
              "computed": false,
              "static": false,
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
              "end": 112,
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
              "value": {
                "type": "FunctionExpression",
                "start": 43,
                "end": 112,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 46,
                  "end": 112,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 56,
                      "end": 82,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 56,
                        "end": 81,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 56,
                          "end": 67,
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 61,
                            "end": 67,
                            "name": "field"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 70,
                          "end": 81,
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 75,
                            "end": 81,
                            "name": "field"
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 91,
                      "end": 106,
                      "expression": {
                        "type": "BinaryExpression",
                        "start": 91,
                        "end": 105,
                        "left": {
                          "type": "PrivateIdentifier",
                          "start": 91,
                          "end": 97,
                          "name": "field"
                        },
                        "operator": "in",
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
