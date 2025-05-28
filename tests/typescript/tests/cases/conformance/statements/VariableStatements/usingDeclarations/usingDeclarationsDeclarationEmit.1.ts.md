__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "kind": "using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 13,
                "end": 34,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 14,
                  "end": 28,
                  "object": {
                    "type": "Identifier",
                    "start": 14,
                    "end": 20,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 28,
                    "decorators": [],
                    "name": "dispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 34,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 34,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 38,
      "end": 52,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 47,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 49,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 108,
      "kind": "await using",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 68,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 71,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 73,
                "end": 105,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 80,
                  "end": 99,
                  "object": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 86,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 99,
                    "decorators": [],
                    "name": "asyncDispose",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 100,
                  "end": 105,
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 103,
                    "end": 105,
                    "body": []
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 109,
      "end": 123,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 118,
          "end": 120,
          "local": {
            "type": "Identifier",
            "start": 118,
            "end": 120,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 118,
            "end": 120,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
