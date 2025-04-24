__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 20,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 19,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 17,
          "end": 19,
          "properties": []
        }
      }
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
  "end": 11,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 11,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 308,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 47,
        "raw": "\"exports-and-types-versions/foo\"",
        "value": "exports-and-types-versions/foo"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 98,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 97,
        "raw": "\"exports-and-types-versions/nope\"",
        "value": "exports-and-types-versions/nope"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 147,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 146,
        "raw": "\"exports-and-types-versions/yep\"",
        "value": "exports-and-types-versions/yep"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 148,
      "end": 206,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 163,
        "end": 205,
        "raw": "\"exports-and-types-versions/versioned-yep\"",
        "value": "exports-and-types-versions/versioned-yep"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 207,
      "end": 265,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 222,
        "end": 264,
        "raw": "\"exports-and-types-versions/versioned-nah\"",
        "value": "exports-and-types-versions/versioned-nah"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 266,
      "end": 307,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 281,
        "end": 306,
        "raw": "\"just-types-versions/foo\"",
        "value": "just-types-versions/foo"
      },
      "specifiers": []
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
  "end": 307,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 47,
        "raw": "\"exports-and-types-versions/foo\"",
        "value": "exports-and-types-versions/foo"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 49,
      "end": 98,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 97,
        "raw": "\"exports-and-types-versions/nope\"",
        "value": "exports-and-types-versions/nope"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 99,
      "end": 147,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 146,
        "raw": "\"exports-and-types-versions/yep\"",
        "value": "exports-and-types-versions/yep"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 148,
      "end": 206,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 163,
        "end": 205,
        "raw": "\"exports-and-types-versions/versioned-yep\"",
        "value": "exports-and-types-versions/versioned-yep"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 207,
      "end": 265,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 222,
        "end": 264,
        "raw": "\"exports-and-types-versions/versioned-nah\"",
        "value": "exports-and-types-versions/versioned-nah"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 266,
      "end": 307,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 281,
        "end": 306,
        "raw": "\"just-types-versions/foo\"",
        "value": "just-types-versions/foo"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
