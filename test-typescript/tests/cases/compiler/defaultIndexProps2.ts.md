__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 29,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 28,
              "value": "Yo",
              "raw": "\"Yo\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "public"
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
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 41,
            "end": 50,
            "callee": {
              "type": "Identifier",
              "start": 45,
              "end": 48,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 85,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 93,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 88,
                  "end": 93,
                  "value": "Yo2",
                  "raw": "\"Yo2\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 126,
      "expression": {
        "type": "MemberExpression",
        "start": 121,
        "end": 125,
        "object": {
          "type": "Literal",
          "start": 121,
          "end": 122,
          "value": 1,
          "raw": "1"
        },
        "property": {
          "type": "Literal",
          "start": 123,
          "end": 124,
          "value": 0,
          "raw": "0"
        },
        "computed": true,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 141,
            "object": {
              "type": "Literal",
              "start": 135,
              "end": 138,
              "value": "s",
              "raw": "\"s\""
            },
            "property": {
              "type": "Literal",
              "start": 139,
              "end": 140,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
