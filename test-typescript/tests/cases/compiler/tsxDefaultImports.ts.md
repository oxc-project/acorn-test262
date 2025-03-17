__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "SomeEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 18,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 21,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 14,
        "end": 24,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 18,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 25,
      "end": 89,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 40,
        "end": 89,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 55,
          "name": "SomeClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 56,
          "end": 89,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 60,
              "end": 87,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 78,
                "end": 86,
                "name": "SomeEnum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
  "end": 54,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
            "name": "Def",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 34,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 43,
            "end": 52,
            "object": {
              "type": "MemberExpression",
              "start": 43,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "name": "Def",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
