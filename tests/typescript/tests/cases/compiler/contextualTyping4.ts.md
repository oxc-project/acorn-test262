__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 59,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 59,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 35,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 23,
                "end": 35,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 24,
                    "end": 34,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 24,
                      "end": 26,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 26,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 27,
                        "end": 33
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "value": {
              "type": "ObjectExpression",
              "start": 38,
              "end": 56,
              "properties": [
                {
                  "type": "Property",
                  "start": 39,
                  "end": 43,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 39,
                    "end": 41,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 42,
                    "end": 43,
                    "value": 5,
                    "raw": "5"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 45,
                  "end": 55,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 49,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 50,
                    "end": 55,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
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
