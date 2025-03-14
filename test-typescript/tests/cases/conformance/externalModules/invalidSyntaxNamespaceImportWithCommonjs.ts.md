__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    41
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        22,
        40
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            37,
            40
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 18,
              "line": 2
            },
            "start": {
              "column": 15,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            35,
            36
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          29,
          40
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 18,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
'as' expected.
```
