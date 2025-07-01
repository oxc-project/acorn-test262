__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 17,
          "end": 19
        },
        "start": 0,
        "end": 19
      },
      "directive": null,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
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
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11
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
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/foo",
        "raw": "\"exports-and-types-versions/foo\"",
        "start": 15,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/nope",
        "raw": "\"exports-and-types-versions/nope\"",
        "start": 64,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/yep",
        "raw": "\"exports-and-types-versions/yep\"",
        "start": 114,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-yep",
        "raw": "\"exports-and-types-versions/versioned-yep\"",
        "start": 163,
        "end": 205
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 206
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-nah",
        "raw": "\"exports-and-types-versions/versioned-nah\"",
        "start": 222,
        "end": 264
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 207,
      "end": 265
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "just-types-versions/foo",
        "raw": "\"just-types-versions/foo\"",
        "start": 281,
        "end": 306
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 266,
      "end": 307
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 308
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/foo",
        "raw": "\"exports-and-types-versions/foo\"",
        "start": 15,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/nope",
        "raw": "\"exports-and-types-versions/nope\"",
        "start": 64,
        "end": 97
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/yep",
        "raw": "\"exports-and-types-versions/yep\"",
        "start": 114,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 99,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-yep",
        "raw": "\"exports-and-types-versions/versioned-yep\"",
        "start": 163,
        "end": 205
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 206
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "exports-and-types-versions/versioned-nah",
        "raw": "\"exports-and-types-versions/versioned-nah\"",
        "start": 222,
        "end": 264
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 207,
      "end": 265
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "just-types-versions/foo",
        "raw": "\"just-types-versions/foo\"",
        "start": 281,
        "end": 306
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 266,
      "end": 307
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 307
}
```
