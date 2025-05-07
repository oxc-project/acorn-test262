__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 142,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 142,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 142,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 112,
              "end": 140,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 116,
                "end": 119,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 119,
                "end": 140,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 138,
                  "end": 140,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 120,
                    "end": 136,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 122,
                        "end": 134,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 126,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "AssignmentPattern",
                          "start": 122,
                          "end": 134,
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "start": 122,
                            "end": 126,
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "right": {
                            "type": "Literal",
                            "start": 129,
                            "end": 134,
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          },
                          "typeAnnotation": null
                        }
                      }
                    ],
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
