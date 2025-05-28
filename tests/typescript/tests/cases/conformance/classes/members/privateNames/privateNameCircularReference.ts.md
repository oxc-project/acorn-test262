__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 130,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
        "end": 130,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "typeAnnotation": null,
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
              "optional": false,
              "computed": false
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
            "type": "PropertyDefinition",
            "start": 36,
            "end": 53,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 36,
              "end": 40,
              "name": "bar"
            },
            "typeAnnotation": null,
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
              "optional": false,
              "computed": false
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
            "type": "PropertyDefinition",
            "start": 58,
            "end": 82,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 59,
              "end": 65,
              "value": "#baz",
              "raw": "\"#baz\""
            },
            "typeAnnotation": null,
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
              "optional": false,
              "computed": true
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
