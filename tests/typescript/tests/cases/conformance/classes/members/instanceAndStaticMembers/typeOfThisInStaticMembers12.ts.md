__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 141,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 38,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 33,
                "end": 38,
                "literal": {
                  "type": "Literal",
                  "start": 33,
                  "end": 38,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 41,
              "end": 46,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "start": 65,
              "end": 139,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 76,
                "decorators": [],
                "name": "Inner",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 139,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 87,
                    "end": 109,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 95,
                      "end": 101,
                      "object": {
                        "type": "ThisExpression",
                        "start": 95,
                        "end": 99
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 105,
                      "end": 108,
                      "value": 123,
                      "raw": "123"
                    },
                    "computed": true,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 118,
                    "end": 133,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 125,
                      "object": {
                        "type": "ThisExpression",
                        "start": 119,
                        "end": 123
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Literal",
                      "start": 129,
                      "end": 132,
                      "value": 123,
                      "raw": "123"
                    },
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
