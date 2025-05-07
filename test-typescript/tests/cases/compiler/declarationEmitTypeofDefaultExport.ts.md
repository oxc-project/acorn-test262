__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 25,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "EmptyStatement",
      "start": 25,
      "end": 26
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
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 26,
      "end": 51,
      "declaration": {
        "type": "MemberExpression",
        "start": 41,
        "end": 50,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 50,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
