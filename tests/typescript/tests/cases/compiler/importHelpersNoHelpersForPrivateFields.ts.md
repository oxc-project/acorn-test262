__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "field",
                "start": 23,
                "end": 29
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 32,
                "end": 36
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 23,
              "end": 37
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "field",
                            "start": 61,
                            "end": 67
                          },
                          "optional": false,
                          "computed": false,
                          "start": 56,
                          "end": 67
                        },
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 70,
                            "end": 74
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "field",
                            "start": 75,
                            "end": 81
                          },
                          "optional": false,
                          "computed": false,
                          "start": 70,
                          "end": 81
                        },
                        "start": 56,
                        "end": 81
                      },
                      "directive": null,
                      "start": 56,
                      "end": 82
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "PrivateIdentifier",
                          "name": "field",
                          "start": 91,
                          "end": 97
                        },
                        "operator": "in",
                        "right": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "start": 91,
                        "end": 105
                      },
                      "directive": null,
                      "start": 91,
                      "end": 106
                    }
                  ],
                  "start": 46,
                  "end": 112
                },
                "expression": false,
                "start": 43,
                "end": 112
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 42,
              "end": 112
            }
          ],
          "start": 17,
          "end": 114
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 114
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 115
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
