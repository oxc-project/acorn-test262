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
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 114,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 23,
              "end": 37,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 23,
                "end": 29,
                "name": "field"
              },
              "value": {
                "type": "Literal",
                "start": 32,
                "end": 36,
                "value": true,
                "raw": "true"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 42,
              "end": 112,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 42,
                "end": 43,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 43,
                "end": 112,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "computed": false,
                          "optional": false
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
                          "computed": false,
                          "optional": false
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
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
