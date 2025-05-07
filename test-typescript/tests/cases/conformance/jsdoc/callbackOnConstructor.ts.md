__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 185,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 185,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 185,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 49,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 42,
                "decorators": [],
                "name": "assignability",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 45,
                "end": 49,
                "raw": "\"no\"",
                "value": "no",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 167,
              "end": 183,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 167,
                "end": 178,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 178,
                "end": 183,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 181,
                  "end": 183,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 24,
          "decorators": [],
          "name": "Preferences",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 229,
            "decorators": [],
            "name": "ooscope2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 232,
            "end": 249,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 237,
              "end": 249,
              "operator": ">",
              "left": {
                "type": "MemberExpression",
                "start": 237,
                "end": 245,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 245,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 248,
                "end": 249,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
