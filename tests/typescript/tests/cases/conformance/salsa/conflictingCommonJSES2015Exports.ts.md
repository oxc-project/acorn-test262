__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 38,
                "end": 39
              },
              "start": 31,
              "end": 40
            }
          ],
          "start": 29,
          "end": 42
        },
        "expression": false,
        "start": 7,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 42
    },
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
            "start": 43,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 57
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 57
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 65
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "abc",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 65
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 62,
              "end": 65
            }
          ],
          "start": 60,
          "end": 67
        },
        "start": 43,
        "end": 67
      },
      "directive": null,
      "start": 43,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "abc",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./bug24934",
        "raw": "'./bug24934'",
        "start": 20,
        "end": 32
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "abc",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 38,
            "end": 39
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 41,
            "end": 42
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 44,
            "end": 45
          }
        ],
        "optional": false,
        "start": 34,
        "end": 46
      },
      "directive": null,
      "start": 34,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
}
```
