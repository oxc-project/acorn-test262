__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 141,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 141,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 46,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
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
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            },
            "value": {
              "type": "Literal",
              "start": 41,
              "end": 46,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 139,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "start": 65,
              "end": 139,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 77,
                "end": 139,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 87,
                    "end": 109,
                    "computed": true,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 95,
                      "end": 101,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 95,
                        "end": 99
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "start": 105,
                      "end": 108,
                      "raw": "123",
                      "value": 123
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 118,
                    "end": 133,
                    "computed": true,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "MemberExpression",
                      "start": 119,
                      "end": 125,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 119,
                        "end": 123
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 124,
                        "end": 125,
                        "decorators": [],
                        "name": "c",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "value": {
                      "type": "Literal",
                      "start": 129,
                      "end": 132,
                      "raw": "123",
                      "value": 123
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 71,
                "end": 76,
                "decorators": [],
                "name": "Inner",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
