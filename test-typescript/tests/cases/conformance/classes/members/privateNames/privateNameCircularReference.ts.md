__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "value": {
              "type": "MemberExpression",
              "start": 21,
              "end": 30,
              "object": {
                "type": "ThisExpression",
                "start": 21,
                "end": 25
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 26,
                "end": 30,
                "name": "bar"
              },
              "computed": false,
              "optional": false
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
            "type": "PropertyDefinition",
            "start": 36,
            "end": 53,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 40,
              "name": "bar"
            },
            "value": {
              "type": "MemberExpression",
              "start": 43,
              "end": 52,
              "object": {
                "type": "ThisExpression",
                "start": 43,
                "end": 47
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 48,
                "end": 52,
                "name": "foo"
              },
              "computed": false,
              "optional": false
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
            "type": "PropertyDefinition",
            "start": 58,
            "end": 82,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 59,
              "end": 65,
              "value": "#baz",
              "raw": "\"#baz\""
            },
            "value": {
              "type": "MemberExpression",
              "start": 69,
              "end": 81,
              "object": {
                "type": "ThisExpression",
                "start": 69,
                "end": 73
              },
              "property": {
                "type": "Literal",
                "start": 74,
                "end": 80,
                "value": "#baz",
                "raw": "\"#baz\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
