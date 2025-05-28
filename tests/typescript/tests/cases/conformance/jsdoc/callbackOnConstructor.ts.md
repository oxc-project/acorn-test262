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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 185,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 185,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 49,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 42,
                "decorators": [],
                "name": "assignability",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 45,
                "end": 49,
                "value": "no",
                "raw": "\"no\""
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
              "type": "MethodDefinition",
              "start": 167,
              "end": 183,
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
              "value": {
                "type": "FunctionExpression",
                "start": 178,
                "end": 183,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 181,
                  "end": 183,
                  "body": []
                },
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 249,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BinaryExpression",
              "start": 237,
              "end": 249,
              "left": {
                "type": "MemberExpression",
                "start": 237,
                "end": 245,
                "object": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 245,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 248,
                "end": 249,
                "value": 0,
                "raw": "0"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
